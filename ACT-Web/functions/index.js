const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase/app");
const bcrypt = require('bcrypt');

const axios = require("axios");
const yahooFinance = require('yahoo-finance2').default;

const HUGGINGFACE_API_KEY = "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";

const firebaseConfig = {
    apiKey: "AIzaSyAFayRb90ywbg82EcLOnH5iBDm3qnZx9TU",
    authDomain: "rd-year-project-1f41d.firebaseapp.com",
    projectId: "rd-year-project-1f41d",
    storageBucket: "rd-year-project-1f41d.appspot.com",
    messagingSenderId: "823208675027",
    appId: "1:823208675027:web:040ff96eac0fc89b0e3626",
    measurementId: "G-86DQSH17PT"
};

initializeApp(firebaseConfig);

const { getStorage, ref, getDownloadURL, uploadString } = require("firebase/storage");

async function getRef_json(refItem) {
    const url = await getDownloadURL(refItem);
    const response = await fetch(url, { mode: 'cors' });
    let data = await response.text();
    data = JSON.parse(data);
    return data;
}

// ! global
const storage = getStorage();
const A_userCreds = ref(storage, 'A_userCreds.json'); // admin
const M_userCreds = ref(storage, 'M_userCreds.json'); // manager
const C_userCreds = ref(storage, 'C_userCreds.json'); // client

const financialData = ref(storage, 'financialData.json'); // scraped data from market
const historicalData = ref(storage, 'historicalData.json'); // scraped data from market

async function loadInfo(data) {
    return await Promise.resolve(getRef_json(data));
}

function genId(type, name, email) {
    return `${type}_${bcrypt.hashSync(`${type}_${name}_${email}`, 5)}`
}

function missingInfoWarning(arr) {
    let missingItems = [];
    for (var item in arr) {
        if (!item) {
            missingItems.push(item)
        }
    }

    return missingItems
}

exports.showDB = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        let db = await loadInfo(M_userCreds);
        res.json(db);

    }
    catch (error) {
        console.log('Couldnt access the database: ', error)
        res.status(500).json({ error: "Interal server error" })
    }
});


exports.verifyAdmin = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        if (req.method != 'POST') {
            res.status(405).json({ error: "Method not allowed" })
        }

        const client_name = req.body.name;
        const client_username = req.body.username;
        const client_email = req.body.email;
        const client_password = req.body.password;
        const client_ID = req.body.id;

        const clientData = [client_name, client_username, client_email, client_password, client_ID]
        const missingItems = missingInfoWarning(clientData);

        if (missingItems == []) {
            res.status(200).json({ error: `${missingItems} is required in the JSON body` })
        }


        const db = await loadInfo(A_userCreds)

        var db_username = "";
        for (const key in db) {
            let valid_username = bcrypt.compareSync(client_username, key)
            if (valid_username) {
                db_username = key
                break
            }
        }

        if (db_username != '') {
            const userInfo = db[db_username];

            const db_email = userInfo.email;
            const db_password = userInfo.password;
            const db_name = userInfo.name;
            const db_ID = userInfo.id;

            let clientData = [client_email, client_password, client_username];
            let missingItems = missingInfoWarning(clientData);

            if (missingItems == []) {
                res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            }

            let correctEmail = bcrypt.compareSync(client_email, db_email);
            let correctPassword = bcrypt.compareSync(client_password, db_password);
            let correctName = bcrypt.compareSync(client_name, db_name);
            let correctID = client_ID == db_ID;
            let verdict = correctEmail && correctPassword && correctName && correctID;

            res.status(200).json({
                'verdict': verdict,
                'correctEmail': correctEmail,
                'correctPassword': correctPassword,
                'correctName': correctName,
                'correctID': correctID
            });
        }

        else {
            res.status(200).json({
                'verdict': false,
                'reason': `${client_username} does not exist`
            });
        }
    }

    catch (error) {
        console.log("Something ewent wrong: ", error)
        res.status(500).json({ error: "Interal server error" })
    }
});

async function verifyAdmin(username, name, email, password, id) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                name: name,
                email: email,
                password: password,
                id: id
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

exports.addAdmin = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        if (req.method != 'POST') {
            res.status(405).json({ error: "Method not allowed" })
        }

        const client_username = req.body.username;
        const client_email = req.body.email;
        const client_password = req.body.password;
        const client_id = req.body.id;

        let isExistingUser = await verifyAdmin(client_username, client_email, client_password, client_id)

        if (isExistingUser) {
            res.status(200).json({ verdict: `Account with username ${client_username} already exists` });
        }

        else {
            const saltRounds = 10;
            const username_hash = bcrypt.hashSync(client_username, saltRounds)
            const email_hash = bcrypt.hashSync(client_email, saltRounds)
            const password_hash = bcrypt.hashSync(client_password, saltRounds)

            let newUser = {
                [username_hash]:
                {
                    email: email_hash,
                    password: password_hash
                }
            }

            const db = await loadInfo(A_userCreds);

            Object.assign(db, newUser)

            uploadString(A_userCreds, JSON.stringify(db)).then(() => {
                res.status(200).json({
                    'verdict': `New user ${client_username} has been created`
                });
            });
        }
    }

    catch (error) {
        console.log("Couldnt add new user: ", error)
        res.status(500).json({ error: "Interal server error" })
    }
});

exports.verifyClient = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        if (req.method != 'POST') {
            res.status(405).json({ error: "Method not allowed" })
        }

        const client_username = req.body.username;
        const client_name = req.body.name;
        const client_contact = req.body.contact;

        const clientData = [client_username, client_name, client_contact]
        const missingItems = missingInfoWarning(clientData);

        if (missingItems == []) {
            res.status(200).json({ error: `${missingItems} is required in the JSON body` })
        }

        const db = await loadInfo(C_userCreds)

        var db_username = "";
        for (const key in db) {
            let valid_username = bcrypt.compareSync(client_username, key)
            if (valid_username) {
                db_username = key
                break
            }
        }

        if (db_username != '') {
            const userInfo = db[db_username];
            const db_name = userInfo.name;
            const db_contact = userInfo.contact

            let clientData = [client_name, client_contact];
            let missingItems = missingInfoWarning(clientData);

            if (missingItems == []) {
                res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            }

            let correctName = bcrypt.compareSync(client_name, db_name);
            let correctContact = bcrypt.compareSync(client_contact, db_contact);

            let verdict = correctName && correctContact;

            res.status(200).json({
                'verdict': verdict,
                'userInfo': userInfo
            });
        }

        else {
            res.status(200).json({
                'verdict': false,
                'reason': `${client_username} does not exist`
            });
        }
    }

    catch (error) {
        console.log("Something went wrong: ", error)
        res.status(500).json({ error: "Interal server error" })
    }
});

exports.verifyManager = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        if (req.method != 'POST') {
            res.status(405).json({ error: "Method not allowed" })
        }

        const client_username = req.body.username;
        const client_email = req.body.email;
        const client_password = req.body.password;

        let clientData = [client_email, client_password];

        let missingItems = missingInfoWarning(clientData);

        if (missingItems == []) {
            res.status(200).json({ error: `${missingItems} is required in the JSON body` })
        }

        const db = await loadInfo(M_userCreds)

        var db_username = "";
        for (const key in db) {
            let valid_username = bcrypt.compareSync(client_username, key)
            if (valid_username) {
                db_username = key
                break
            }
        }

        if (db_username != '') {
            const managerInfo = db[db_username];

            const db_email = managerInfo.email;
            const db_password = managerInfo.password
            const correctEmail = bcrypt.compareSync(client_email, db_email);
            const correctPassword = bcrypt.compareSync(client_password, db_password);

            let verdict = correctEmail && correctPassword;

            res.status(200).json({
                'verdict': verdict,
                'managerInfo': managerInfo,
            });
        }

        else {
            res.status(200).json({
                'verdict': false,
                'reason': `${client_username} does not exist`
            });
        }
    }

    catch (error) {
        console.log("Something went wrong: ", error)
        res.status(500).json({ error: "Interal server error" })
    }
});


async function verifyManager(username, name, email, password) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyManager', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                name: name,
                email: email,
                password: password,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        return userData.verdict;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

exports.addManager = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        if (req.method != 'POST') {
            res.status(405).json({ error: "Method not allowed" })
        }

        const client_username = req.body.username;
        const client_name = req.body.name;
        const client_email = req.body.email;
        const client_password = req.body.password;

        let isExistingUser = await verifyManager(client_username, client_name, client_email, client_password)

        if (isExistingUser) {
            res.status(200).json({ verdict: `Account with username ${client_username} already exists` });
        }

        else {
            const saltRounds = 5;
            const username_hash = bcrypt.hashSync(client_username, saltRounds)
            const email_hash = bcrypt.hashSync(client_email, saltRounds)
            const password_hash = bcrypt.hashSync(client_password, saltRounds)
            const name_hash = bcrypt.hashSync(client_name, saltRounds)

            let newUser = {
                [username_hash]:
                {
                    name: name_hash,
                    email: email_hash,
                    password: password_hash
                }
            }

            const db = await loadInfo(M_userCreds)

            Object.assign(db, newUser)

            uploadString(M_userCreds, JSON.stringify(db)).then(() => {
                res.status(200).json({
                    verdict: `New user ${client_username} has been created`,
                    newUser: newUser
                });
            });
        }
    }

    catch (error) {
        console.log("Couldnt add new user: ", error)
        res.status(500).json({ error: "Interal server error" })
    }
});

exports.aiGen = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        if (req.method != 'POST') {
            res.status(405).json({ error: "Method not allowed" })
        }

        const prompt = req.body.prompt;

        if (!prompt) {
            res.status(200).json({ error: `${missingItems} is required in the JSON body` })
        }

        const response = await axios.post(
            "https://api-inference.huggingface.co/models/gpt2",
            { inputs: prompt },
            {
                headers: { Authorization: `Bearer ${HUGGINGFACE_API_KEY}` }
            }
        );

        if (response.status === 200) {
            res.status(200).send(response.data[0].generated_text);
        } else {
            res.status(response.status).send("Error generating response");
        }
    } catch (error) {
        console.error("Error calling Hugging Face API:", error);
        res.status(500).send("Server Error");
    }
});

const stockTickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "DELL", "AMD", "NVDA"];
const cryptoTickers = ["BTC-USD", "ETH-USD", "DOGE-USD"];
const period = "1y"


exports.scraper = onRequest({ region: 'europe-west2' }, async (req, res) => {
    try {
        async function fetchData(tickers, isCrypto = false) {
            const data = {};

            for (const ticker of tickers) {
                try {
                    const info = await yahooFinance.quoteSummary(ticker, { modules: ['price', 'summaryDetail', 'recommendationTrend', 'earningsTrend'] });
                    data[ticker] = {
                        name: info.price.shortName || "N/A",
                        currentPrice: info.price.regularMarketPrice || "N/A",
                        marketCap: info.price.marketCap || "N/A",
                        volume: info.price.regularMarketVolume || "N/A",
                        "52WeekHigh": info.summaryDetail.fiftyTwoWeekHigh || "N/A",
                        "52WeekLow": info.summaryDetail.fiftyTwoWeekLow || "N/A"
                    };

                    if (!isCrypto) {
                        data[ticker]["eps_trend"] = info.earningsTrend ? JSON.stringify(info.earningsTrend.trend) : "N/A";
                        data[ticker]["recommendations"] = info.recommendationTrend ? JSON.stringify(info.recommendationTrend.trend) : "N/A";
                    }
                } catch (error) {
                    console.error(`Error fetching data for ${ticker}:`, error);
                    data[ticker] = { error: "Failed to retrieve data" };
                }
            }
            return data;
        }

        const stocksData = await fetchData(stockTickers, false);
        const cryptosData = await fetchData(cryptoTickers, true);

        const allData = {
            stocks: stocksData,
            cryptos: cryptosData
        };

        uploadString(financialData, JSON.stringify(allData)).then(() => {
            res.status(200).json({
                verdict: "Financial data saved to Firebase successfully"
            });
        });

        res.status(200).json({ message: 'Financial data saved to Firebase successfully', data: allData });
    } catch (error) {
        console.error("Error saving financial data:", error);
        res.status(500).json({ error: "Failed to save financial data" });
    }
});

exports.history = onRequest({ region: 'europe-west2' }, async (req, res) => {
    const stockTickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "DELL", "AMD", "NVDA"];
    const cryptoTickers = ["BTC-USD", "ETH-USD", "DOGE-USD"];
    const period = "1y";  // Equivalent to the Python period

    // Calculate period1 (start time) as one year ago and period2 (end time) as now
    const period2 = Math.floor(new Date().getTime() / 1000); // Current time in Unix timestamp
    const period1 = Math.floor(new Date(new Date().setFullYear(new Date().getFullYear() - 1)).getTime() / 1000); // 1 year ago

    // Function to fetch historical data for a set of tickers
    async function fetchHistoryData(tickers) {
        const historicalData = {};

        for (const ticker of tickers) {
            try {
                const assetInfo = await yahooFinance.quoteSummary(ticker, { modules: ["price"] });
                const assetName = assetInfo.price.shortName || "N/A";

                // Fetch historical OHLCV data using `chart`
                const raw_data = await yahooFinance.chart(ticker, {
                    period1,
                    period2,
                    interval: "1d"
                });

                // Format each entry as specified
                const histData = raw_data.quotes.map(entry => ({
                    Date: new Date(entry.date).toUTCString(),
                    Open: entry.open,
                    High: entry.high,
                    Low: entry.low,
                    Close: entry.close,
                    Volume: entry.volume
                }));

                historicalData[ticker] = {
                    name: assetName,
                    history: histData
                };

            } catch (error) {
                console.error(`Error fetching data for ${ticker}:`, error.message);
            }
        }

        return historicalData;
    }


    try {
        // Fetch data for stocks and cryptocurrencies
        const stocksData = await fetchHistoryData(stockTickers);
        const cryptosData = await fetchHistoryData(cryptoTickers);

        // Combine results
        const allData = {
            stocks_history: stocksData,
            cryptos_history: cryptosData
        };

        uploadString(historicalData, JSON.stringify(allData)).then(() => {
            res.status(200).json({
                verdict: "historical data saved to Firebase successfully"
            });
        });

        res.status(200).json({ message: 'historical data saved to Firebase successfully', data: allData });

    } catch (error) {
        console.error("Error fetching historical data:", error.message);
        res.status(500).json({ error: "Failed to fetch historical data" });
    }
});


exports.updateDetails = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        if (req.method != 'POST') {
            res.status(405).json({ error: "Method not allowed" })
        }

        const client_username = req.body.username;

        const new_email = req.body.new_email;
        const new_name = req.body.new_name;
        const new_password = req.body.new_password;

        const clientData = [new_email, new_name, new_password]
        const missingItems = missingInfoWarning(clientData);

        if (missingItems == []) {
            res.status(200).json({ error: `${missingItems} is required in the JSON body` })
        }

        var db_username = '';

        let db = await loadInfo();

        for (var key in db) {
            db_username = bcrypt.compareSync(client_username, key)
            if (db_username) {
                db_username = key
                break
            }
        }

        if (db_username == false) {
            res.status(200).json({
                verdict: `No data for: ${client_username} was found on file`
            });
        }

        else {
            const dbInfo = db[db_username];

            console.log("db dbInfo: ", dbInfo)

            const db_email = dbInfo.email;
            const db_name = dbInfo.name;
            const db_password = dbInfo.password;

            var userInfo = {

            }

            userInfo.email = bcrypt.hashSync(new_email, 5);

            if (!bcrypt.compareSync(new_email, db_email)) {
                userInfo.email = bcrypt.hashSync(new_email, 5);
            }

            if (!bcrypt.compareSync(new_name, db_name)) {
                userInfo.name = bcrypt.hashSync(new_name, 5);
            }

            if (!bcrypt.compareSync(new_password, db_password)) {
                userInfo.password = bcrypt.hashSync(new_password, 5);
            }

            db[db_username] = userInfo;

            uploadString(userCreds, JSON.stringify(db)).then(() => {
                res.status(200).json({
                    'verdict': `Updated ${client_username}'s details successfully`,
                    'newDetails': userInfo
                });
            });
        }
    }

    catch (error) {
        console.log("Couldnt add new user: ", error)
        res.status(500).json({ error: "Interal server error" })
    }
});

/* 
? to start the backend server run "firebase eumlators:start" in "functions" folder

http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/showDB
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyAdmin
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/addAdmin
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyClient
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyManager
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/addManager
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/aiGen
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/scraper
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/updateDetails
*/
const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase/app");
const bcrypt = require('bcrypt');

const axios = require("axios");
const yahooFinance = require('yahoo-finance2').default;

const HUGGINGFACE_API_KEY = "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";

const POLYGON_API_KEY = "zGlBumTMyGo8hIZdI8M2CGdy8ZfFjDnV";

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

const cors = require('cors');
const corsHandler = cors({
    origin: true,
    methods: ['DELETE', 'PUT', 'GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 3600, // Cache preflight response for 1 hour
});

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

const currentUser = ref(storage, 'currentUser.json'); // current user data from a login or sign up

async function loadInfo(data) {
    return await Promise.resolve(getRef_json(data));
}

function genId(type, name, email) {
    return `${type}_${bcrypt.hashSync(`${type}_${name}_${email}`, 5)}`
}

function findUserProfile(db, client_username) {
    for (const key in db) {
        let valid_username = bcrypt.compareSync(client_username, key)
        if (valid_username) {
            return db[key]
        }
    }
    return undefined
}

function find_db_username(db, client_username) {
    for (const key in db) {
        let valid_username = bcrypt.compareSync(client_username, key)
        if (valid_username) {
            return key
        }
    }
    return undefined
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
    corsHandler(req, res, async () => {
        try {
            let db = await loadInfo(M_userCreds);
            res.json(db);

        }
        catch (error) {
            console.log('Couldnt access the database: ', error)
            return res.status(500).json({ error: "Interal server error" })
        }
    });
});


exports.verifyAdmin = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method != 'POST') {
                return res.status(405).json({ error: "Method not allowed" })
            }

            const client_name = req.body.name;
            const client_username = req.body.username;
            const client_email = req.body.email;
            const client_password = req.body.password;
            const client_ID = req.body.id;

            const clientData = [client_name, client_username, client_email, client_password, client_ID]
            const missingItems = missingInfoWarning(clientData);

            if (missingItems == []) {
                return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            }


            const db = await loadInfo(A_userCreds)


            const userInfo = findUserProfile(db, client_username);
            if (userInfo != undefined) {
                const db_email = userInfo.email;
                const db_password = userInfo.password;
                const db_name = userInfo.name;
                const db_ID = userInfo.id;

                let clientData = [client_email, client_password, client_username];
                let missingItems = missingInfoWarning(clientData);

                if (missingItems == []) {
                    return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
                }

                let correctEmail = bcrypt.compareSync(client_email, db_email);
                let correctPassword = bcrypt.compareSync(client_password, db_password);
                let correctName = bcrypt.compareSync(client_name, db_name);
                let correctID = client_ID == db_ID;
                let verdict = correctEmail && correctPassword && correctName && correctID;

                return res.status(200).json({
                    'verdict': verdict,
                    'correctEmail': correctEmail,
                    'correctPassword': correctPassword,
                    'correctName': correctName,
                    'correctID': correctID
                });
            }

            else {
                return res.status(200).json({
                    'verdict': false,
                    'reason': `${client_username} does not exist`
                });
            }
        }

        catch (error) {
            console.log("Couldnt verify Admin: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    });
});

async function verifyAdmin(username, name, email, password, id) {
    corsHandler(async () => {
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
    });
}

exports.addAdmin = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method != 'POST') {
                return res.status(405).json({ error: "Method not allowed" })
            }

            const client_username = req.body.username;
            const client_email = req.body.email;
            const client_password = req.body.password;
            const client_id = req.body.id;

            let isExistingUser = await verifyAdmin(client_username, client_email, client_password, client_id)

            if (isExistingUser) {
                return res.status(200).json({ verdict: `Account with username ${client_username} already exists` });
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
                    return res.status(200).json({
                        'verdict': `New user ${client_username} has been created`
                    });
                });
            }
        }

        catch (error) {
            console.log("Couldnt add new admin: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    });
});

exports.verifyClient = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method != 'POST') {
                return res.status(405).json({ error: "Method not allowed" })
            }

            const client_username = req.body.username;
            const client_name = req.body.name;
            const client_contact = req.body.contact;

            const clientData = [client_username, client_name, client_contact]
            const missingItems = missingInfoWarning(clientData);

            if (missingItems == []) {
                return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            }

            const db = await loadInfo(C_userCreds)

            const userInfo = findUserProfile(db, client_username);
            if (userInfo != undefined) {
                const db_name = userInfo.name;
                const db_contact = userInfo.contact

                let clientData = [client_name, client_contact];
                let missingItems = missingInfoWarning(clientData);

                if (missingItems == []) {
                    return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
                }

                let correctName = bcrypt.compareSync(client_name, db_name);
                let correctContact = bcrypt.compareSync(client_contact, db_contact);

                let verdict = correctName && correctContact;

                return res.status(200).json({
                    'verdict': verdict,
                    'userInfo': userInfo
                });
            }

            else {
                return res.status(200).json({
                    'verdict': false,
                    'reason': `${client_username} does not exist`
                });
            }
        }

        catch (error) {
            console.log("Couldnt verify Client: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    });
});

exports.verifyManager = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method != 'POST') {
                return res.status(405).json({ error: "Method not allowed" })
            }

            const client_username = req.body.username;
            const client_email = req.body.email;
            const client_password = req.body.password;

            let clientData = [client_email, client_password];

            let missingItems = missingInfoWarning(clientData);

            if (missingItems == []) {
                return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            }

            const db = await loadInfo(M_userCreds)

            const managerInfo = findUserProfile(db, client_username);
            if (managerInfo != undefined) {
                const db_email = managerInfo.email;
                const db_password = managerInfo.password
                const correctEmail = bcrypt.compareSync(client_email, db_email);
                const correctPassword = bcrypt.compareSync(client_password, db_password);

                let verdict = correctEmail && correctPassword;

                return res.status(200).json({
                    'verdict': verdict,
                    'managerInfo': managerInfo,
                });
            }

            else {
                return res.status(200).json({
                    'verdict': false,
                    'reason': `${client_username} does not exist`
                });
            }
        }

        catch (error) {
            console.log("Couldnt verify Manager: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    });
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
    corsHandler(req, res, async () => {
        try {
            if (req.method != 'POST') {
                return res.status(405).json({ error: "Method not allowed" })
            }

            const client_username = req.body.username;
            const client_name = req.body.name;
            const client_email = req.body.email;
            const client_password = req.body.password;

            let isExistingUser = await verifyManager(client_username, client_name, client_email, client_password)

            if (isExistingUser) {
                return res.status(200).json({ verdict: `Account with username ${client_username} already exists` });
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
                    return res.status(200).json({
                        verdict: `New user ${client_username} has been created`,
                        newUser: newUser
                    });
                });
            }
        }

        catch (error) {
            console.log("Couldnt add new Manager: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    });
});

async function verifyClient(username, name, contact) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                name: name,
                contact: contact
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

exports.addClients = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method != 'POST') {
                return res.status(405).json({ error: "Method not allowed" })
            }

            const client_username = req.body.username
            const name = req.body.name
            const contact = req.body.contact
            const managersUsername = req.body.managersUsername;


            let isExistingUser = await verifyClient(client_username, name, contact).verdict

            if (isExistingUser) {
                return res.status(200).json({ verdict: `Client with username ${client_username} has been added` });
            }

            else {
                const max = 30000
                const min = 30
                const cash = Math.floor(Math.random() * (max - min + 1) + min);

                const newClient = {
                    [client_username]: {
                        name: name,
                        contact: contact,
                        cash: cash,
                        managersUsername: managersUsername,
                        portfolio: []
                    }
                }

                const C_db = await loadInfo(C_userCreds);
                Object.assign(C_db, newClient)

                uploadString(C_userCreds, JSON.stringify(C_db)).then(() => {
                    return res.status(200).json({
                        verdict: `Client with username ${client_username} already exists`
                    });
                });

                const M_db = await loadInfo(M_userCreds)

                M_db[find_db_username(M_db, managersUsername)].clients.push(newClient)

                uploadString(M_userCreds, JSON.stringify(M_db)).then(() => {
                    return res.status(200).json({
                        verdict: `Updated ${managersUsername}'s client list with ${client_username}'s details`
                    });
                });
            }
        }

        catch (error) {
            console.log("Couldnt add new client: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    })
})

exports.removeClients = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method != 'POST') {
                return res.status(405).json({ error: "Method not allowed" })
            }

            const client_username = req.body.client_username;
            const managers_username = req.body.managers_username;

            const C_db = loadInfo(C_userCreds)

            delete C_db[find_db_username(C_db, client_username)]

            uploadString(C_userCreds, JSON.stringify(C_db)).then(() => {
                return res.status(200).json({
                    verdict: `removed ${client_username}`
                });
            });

            const M_db = loadInfo(M_userCreds)
            const index = M_db[find_db_username(M_db, managers_username)].clients.indexOf(find_db_username(C_db, client_username))
            M_db[find_db_username(M_db, managers_username)].clients.splice(index, 1)

            uploadString(M_userCreds, JSON.stringify(M_db)).then(() => {
                return res.status(200).json({
                    verdict: `removed ${client_username}`
                });
            });
        }

        catch (error) {
            console.log("Couldnt add new client: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    })
})


exports.updateClientDetails = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method != 'POST') {
                return res.status(405).json({ error: "Method not allowed" })
            }

            const client_username = req.body.client_username
            const updateData = req.body.updateData
            const managers_username = req.body.managers_username

            const clientData = [client_username, updateData, managers_username]
            const missingItems = missingInfoWarning(clientData);

            if (missingItems == []) {
                return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            }

            const C_db = loadInfo(C_userCreds)
            const data = updateData[find_db_username(C_db, client_username)]
            let isClient = verifyClient(client_username, data.name, data.contact).verdict

            if (isClient) {
                C_db[find_db_username(C_db, client_username)] = updateData

                uploadString(C_userCreds, JSON.stringify(C_db)).then(() => {
                    return res.status(200).json({
                        verdict: `Updated ${client_username}`,
                        updateData: updateData
                    });
                });

                // todo update the clients in the managers db
                const M_db = loadInfo(M_userCreds);
                M_db[find_db_username(managers_username)].clients[find_db_username(C_db, client_username)] = updateData
                uploadString(M_userCreds, JSON.stringify(M_db)).then(() => {
                    return res.status(200).json({
                        verdict: `Updated ${client_username}`,
                        updateData: updateData
                    });
                });
            }
        }

        catch (error) {
            console.log("Couldnt add new client: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    })
})


exports.showClientDetails = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            const username = req.body.username;

            const C_db = loadInfo(C_userCreds);
            const data = C_db[find_db_username(username)];

            if (data != undefined) {
                res.status(200).json({ data })
            }
            else {
                res.status(200).json({ error: `The User ${username} does not exist` })
            }
        }

        catch (error) {
            console.log("Couldnt add new client: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    })
})

exports.aiGen = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method != 'POST') {
                return res.status(405).json({ error: "Method not allowed" })
            }

            const prompt = req.body.prompt;

            if (!prompt) {
                return res.status(200).json({ error: `${prompt} is required in the JSON body` })
            }

            const response = await axios.post(
                "https://api-inference.huggingface.co/models/gpt2",
                { inputs: prompt },
                {
                    headers: { Authorization: `Bearer ${HUGGINGFACE_API_KEY}` }
                }
            );

            if (response.status === 200) {
                return res.status(200).send(response.data[0].generated_text);
            } else {
                return res.status(response.status).send("Error generating response");
            }
        } catch (error) {
            console.error("Error calling Hugging Face API:", error);
            return res.status(500).send("Server Error");
        }
    });
});

const stockTickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "DELL", "AMD", "NVDA"];
const cryptoTickers = ["BTC-USD", "ETH-USD", "DOGE-USD"];

exports.scraper = onRequest({ region: 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
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
                        };

                        if (!isCrypto) {
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
                return res.status(200).json({
                    verdict: "Financial data saved to Firebase successfully"
                });
            });

            return res.status(200).json({ message: 'Financial data saved to Firebase successfully', data: allData });
        } catch (error) {
            console.error("Error saving financial data:", error);
            return res.status(500).json({ error: "Failed to save financial data" });
        }
    });
});

exports.history = onRequest({ region: 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {

        const currentTime = Math.floor(new Date().getTime() / 1000)

        // todo get input to devide which period and intervals to use
        const allPeriods = {
            '1D': {
                period1: Math.floor(new Date(Date.now() - 24 * 60 * 60 * 1000).getTime() / 1000), // 1 day ago
                period2: currentTime,
                interval: '1m'
            },
            '1W': {
                period1: Math.floor(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).getTime() / 1000), // 1 week ago
                period2: currentTime,
                interval: '5m'
            },
            '1M': {
                period1: Math.floor(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).getTime() / 1000), // 1 month ago
                period2: currentTime,
                interval: '15m'
            },
            '6M': {
                period1: Math.floor(new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000).getTime() / 1000), // 6 months ago
                period2: currentTime,
                interval: '1h'
            },
            '1Y': {
                period1: Math.floor(new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).getTime() / 1000), // 1 year ago
                period2: currentTime,
                interval: '1d'
            }
        };

        const unit = allPeriods['1D'];
        const period1 = unit.period1
        const period2 = unit.period2
        const interval = unit.interval
        

        async function fetchHistoryData(tickers) {
            const historicalData = {};

            for (const ticker of tickers) {
                try {
                    const assetInfo = await yahooFinance.quoteSummary(ticker, { modules: ["price"] });
                    const assetName = assetInfo.price.shortName || "N/A";

                    const raw_data = await yahooFinance.chart(ticker, {
                        period1,
                        period2,
                        interval: interval
                    });


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

            const stocksData = await fetchHistoryData(stockTickers);
            const cryptosData = await fetchHistoryData(cryptoTickers);


            const allData = {
                stocks_history: stocksData,
                cryptos_history: cryptosData
            };

            uploadString(historicalData, JSON.stringify(allData)).then(() => {
                return res.status(200).json({
                    verdict: "historical data saved to Firebase successfully"
                });
            });

            return res.status(200).json({
                message: 'historical data saved to Firebase successfully',
                data: allData
            });

        } catch (error) {
            console.error("Error fetching historical data:", error.message);
            return res.status(500).json({ error: "Failed to fetch historical data" });
        }
    });
});


exports.updateManagersDetails = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method != 'POST') {
                return res.status(405).json({ error: "Method not allowed" })
            }

            const client_username = req.body.username;

            const new_email = req.body.new_email;
            const new_name = req.body.new_name;
            const new_password = req.body.new_password;

            const clientData = [new_email, new_name, new_password]
            const missingItems = missingInfoWarning(clientData);

            if (missingItems == []) {
                return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            }

            var db_username = '';

            const db = await loadInfo(M_userCreds);

            const userInfo = findUserProfile(db, client_username)

            if (db_username == false) {
                return res.status(200).json({
                    verdict: `No data for: ${client_username} was found on file`
                });
            }

            else {
                const dbInfo = db[db_username];

                console.log("db dbInfo: ", dbInfo)

                const db_email = dbInfo.email;
                const db_name = dbInfo.name;
                const db_password = dbInfo.password;

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
                    return res.status(200).json({
                        'verdict': `Updated ${client_username}'s details successfully`,
                        'newDetails': userInfo
                    });
                });
            }
        }

        catch (error) {
            console.log("Couldnt update manager's user creditionals: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    });

});

exports.currentUser = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method == 'POST') {
                const data = req.body.data;

                if (!data) {
                    return res.status(200).json({ error: `Data is required in the JSON body` })
                }

                uploadString(currentUser, JSON.stringify(data)).then(() => {
                    return res.status(200).json({
                        verdict: 'Current User data has been uploaded',
                        data: data
                    });
                });
            }

            else if (req.method == 'GET') {
                const db = await loadInfo(currentUser)
                return res.status(200).json({ db })
            }

            else {
                return res.status(200).json({ error: "Method must be a GET or POST request" })
            }
        }

        catch (error) {
            console.log("Couldn't get current user info: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    })
})

/* 
? to start the backend server run "firebase eumlators:start" in "functions" folder

http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/showDB


http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyAdmin
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/addAdmin
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/addClients
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/removeClients
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/updateClientDetails
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/showClientDetails
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyClient
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyManager
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/addManager
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/aiGen
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/scraper
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/history
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/updateManagersDetails
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/currentUser
*/
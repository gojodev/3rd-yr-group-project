const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase/app");
const bcrypt = require('bcrypt');

const yahooFinance = require('yahoo-finance2').default;

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

const currentUser = ref(storage, 'currentUser.json'); // current user data from a login or sign up for all user types

async function loadInfo(data) {
    return await Promise.resolve(getRef_json(data));
}

function findUserProfile(db, client_username) {
    let res = undefined;
    for (const key in db) {
        const valid_username = bcrypt.compareSync(client_username, key)
        if (valid_username) {
            res = db[key];
            break
        }
    }
    return res;
}

function find_db_username(db, client_username) {
    let res = undefined;
    for (const key in db) {
        let valid_username = bcrypt.compareSync(client_username, key)
        if (valid_username) {
            res = key
            break
        }
    }
    return res
}

exports.showDB = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            let db = await loadInfo(M_userCreds);
            res.json({
                type: "managers",
                db
            });

        }
        catch (error) {
            console.log('Couldnt access the database: ', error)
            return res.status(500).json({ error: "Interal server error" })
        }
    });
});

exports.addAsset = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            const managers_username = req.body.managers_username
            const clients_username = req.body.clients_username
            const assetName = req.body.assetName
            const assetSymbol = req.body.assetSymbol
            const currentPrice = req.body.currentPrice
            const amountBought = req.body.amountBought

            const admins_username = req.body.admins_username

            const data = {
                assetName,
                currentPrice,
                amountBought
            }

            if (admins_username != null) {
                const A_db = await loadInfo(A_userCreds)
                const db_admin_username = find_db_username(A_db, admins_username)
                A_db[db_admin_username].portfolio[assetSymbol] = data;

                uploadString(A_userCreds, JSON.stringify(A_db), 'raw', { contentType: 'application/json' }).then(() => {
                    return res.status(200).json({
                        verdict: `Admin ${admins_username} added the asset ${assetSymbol} (${assetName}) to their portfolio`,
                        data
                    });
                });

            }
            else if (managers_username != null && clients_username != null) {
                const C_db = await loadInfo(C_userCreds)
                const M_db = await loadInfo(M_userCreds)

                const db_managers_username = find_db_username(M_db, managers_username)
                const db_clients_username = find_db_username(C_db, clients_username)

                console.log('assetSymbol : ', assetSymbol)

                M_db[db_managers_username].clients[db_clients_username].portfolio[assetSymbol] = data

                uploadString(M_userCreds, JSON.stringify(M_db), 'raw', { contentType: 'application/json' }).then(() => {
                    return res.status(200).json({
                        verdict: `${managers_username} added ${assetSymbol} (${assetName}) to ${clients_username}'s portfolio`,
                        data
                    });
                });

                C_db[db_clients_username].portfolio[assetSymbol] = data

                uploadString(C_userCreds, JSON.stringify(C_db), 'raw', { contentType: 'application/json' })
            }

            else {
                return res.status(200).json({
                    verdict: `You need to have null values to use add assets for managers with their clients OR admins NOT both. Please look at your inputs again`,
                    data
                });
            }
        }

        catch (error) {
            console.log("Something went wrong (updatePortfolio): ", error)
            return res.status(500).json({ error: "Interal server error (updatePortfolio)" })
        }
    })
})

function isOwnedAsset(data, search) {
    const symbols = Object.keys(data)
    for (let i = 0; i < symbols.length; i++) {
        if (search == symbols[i]) {
            return true
        }
    }
    return false
}

exports.removeAsset = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            const managers_username = req.body.managers_username
            const clients_username = req.body.clients_username
            const assetSymbol = req.body.assetSymbol

            const admins_username = req.body.admins_username

            if (admins_username != null) {
                const A_db = await loadInfo(A_userCreds)

                const db_admin_username = find_db_username(A_db, admins_username)

                const portfolio = A_db[db_admin_username].portfolio
                const isOwned = isOwnedAsset(portfolio, assetSymbol)

                if (isOwned) {
                    delete A_db[find_db_username(A_db, admins_username)].portfolio[assetSymbol]

                    uploadString(A_userCreds, JSON.stringify(A_db), 'raw', { contentType: 'application/json' }).then(() => {
                        return res.status(200).json({
                            verdict: `${admins_username} removed ${assetSymbol} from their portfolio`,
                        });
                    });
                }
                else {
                    return res.status(200).json({ error: `The Asset's symbol: ${assetSymbol} is not in the portfolio` })
                }
            }
            else if (managers_username != null && clients_username != null) {
                const M_db = await loadInfo(M_userCreds)
                const C_db = await loadInfo(C_userCreds)

                const portfolio = M_db[find_db_username(M_db, managers_username)].clients[find_db_username(C_db, clients_username)].portfolio
                const isOwned = isOwnedAsset(portfolio, assetSymbol)

                if (isOwned) {
                    const db_managers_username = find_db_username(M_db, managers_username)
                    const db_clients_username = find_db_username(C_db, clients_username)

                    delete M_db[db_managers_username].clients[db_clients_username].portfolio[assetSymbol]
                    delete C_db[db_clients_username].portfolio[assetSymbol]

                    uploadString(M_userCreds, JSON.stringify(M_db), 'raw', { contentType: 'application/json' }).then(() => {
                        return res.status(200).json({
                            verdict: `${managers_username} removed ${assetSymbol} from ${clients_username}'s portfolio`,
                        });
                    });

                    uploadString(C_userCreds, JSON.stringify(C_db), 'raw', { contentType: 'application/json' })
                }
                else {
                    return res.status(200).json({ error: `The Asset's symbol: ${assetSymbol} is not in the portfolio` })
                }

            }
            else {
                return res.status(200).json({
                    verdict: `You need to have null values to use add assets for managers with their clients OR admins NOT both. Please look at your inputs again`
                });
            }

        }
        catch (error) {
            console.log("Something went wrong (updatePortfolio): ", error)
            return res.status(500).json({ error: "Interal server error (updatePortfolio)" })
        }
    })
})


exports.userOps = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        const operation = req.body.operation // create, read, modify, delete, verify (CRUDV)
        const type = req.body.type // client, manager, admin

        // ? all possible opeartions
        const showClientDetails = operation == 'read' && type == 'client'
        const updateClientDetails = operation == 'modify' && type == 'client'

        const verifyClient = operation == 'verify' && type == 'client'
        const verifyManager = operation == 'verify' && type == 'manager'
        const verifyAdmin = operation == 'verify' && type == 'admin'

        const addClients = operation == 'create' && type == 'client'
        const addAdmin = operation == 'create' && type == 'admin'
        const addManager = operation == 'create' && type == 'manager'

        const deleteClients = operation == 'delete' && type == 'client'
        const deleteManager = operation == 'delete' && type == 'manager'
        const deleteAdmin = operation == 'delete' && type == 'admin'

        try {
            if (addClients) {
                const client_username = req.body.client_username
                const client_name = req.body.client_name
                const client_contact = req.body.client_contact
                const managers_username = req.body.managers_username;

                const C_db = await loadInfo(C_userCreds);
                let isExistingUser = findUserProfile(C_db, client_username)

                if (isExistingUser != undefined) {
                    return res.status(200).json({ verdict: `Client with username ${client_username} already exists` });
                }

                else {
                    const max = 30000
                    const min = 30
                    const cash = Math.floor(Math.random() * (max - min + 1) + min);

                    const newClient = {
                        [client_username]: {
                            name: client_name,
                            contact: client_contact,
                            cash: cash,
                            managers_username: managers_username,
                            portfolio: {}
                        }
                    }

                    C_db[client_username] = newClient

                    uploadString(C_userCreds, JSON.stringify(C_db), 'raw', { contentType: 'application/json' })

                    const db_current = await loadInfo(currentUser)
                    db_current['client'] = newClient

                    uploadString(currentUser, JSON.stringify(db_current), 'raw', { contentType: 'application/json' })

                    const M_db = await loadInfo(M_userCreds)

                    console.log('managers_username : ', managers_username)
                    M_db[find_db_username(M_db, managers_username)].clients[client_username] = newClient

                    uploadString(M_userCreds, JSON.stringify(M_db), 'raw', { contentType: 'application/json' }).then(() => {
                        return res.status(200).json({
                            verdict: `Updated ${managers_username}'s client list with ${client_username}'s details`
                        });
                    });
                }
            }
            else if (showClientDetails) {
                const username = req.body.username;

                const C_db = await loadInfo(C_userCreds);
                const data = findUserProfile(C_db, username);

                if (data != undefined) {
                    res.status(200).json({ data })
                }
                else {
                    res.status(200).json({ error: `The User ${username} does not exist` })
                }
            }
            else if (updateClientDetails) {
                const client_username = req.body.client_username
                const updateData = req.body.updateData
                const managers_username = req.body.managers_username

                const C_db = await loadInfo(C_userCreds)
                let isClient = Object.keys(C_db).includes(find_db_username(C_db, client_username))

                const updatedProfile = {
                    [client_username]: {
                        name: bcrypt.hashSync(updateData.name, 5),
                        contact: bcrypt.hashSync(updateData.contact, 5),
                        cash: bcrypt.hashSync(updateData.cash, 5),
                        portfolio: updateData.portfolio
                    }
                }

                if (isClient) {
                    C_db[find_db_username(C_db, client_username)] = updatedProfile

                    uploadString(C_userCreds, JSON.stringify(C_db), 'raw', { contentType: 'application/json' })

                    const M_db = await loadInfo(M_userCreds);
                    M_db[find_db_username(M_db, managers_username)].clients[find_db_username(C_db, client_username)] = updatedProfile
                    uploadString(M_userCreds, JSON.stringify(M_db), 'raw', { contentType: 'application/json' }).then(() => {
                        return res.status(200).json({
                            verdict: `Updated ${client_username}`,
                            updatedProfile: updatedProfile
                        });
                    });
                }
                else {
                    return res.status(200).json({
                        error: `Double check what data you sent concerning ${client_username}`,
                        updatedProfile: updatedProfile
                    });
                }
            }
            else if (deleteClients) {
                if (req.method != 'POST') {
                    return res.status(405).json({ error: "Method not allowed" })
                }

                const client_username = req.body.client_username;
                const managers_username = req.body.managers_username;

                const C_db = await loadInfo(C_userCreds)

                delete C_db[find_db_username(C_db, client_username)]

                uploadString(C_userCreds, JSON.stringify(C_db), 'raw', { contentType: 'application/json' })

                const M_db = await loadInfo(M_userCreds)
                const index = M_db[find_db_username(M_db, managers_username)].clients.indexOf(find_db_username(C_db, client_username))
                M_db[find_db_username(M_db, managers_username)].clients.splice(index, 1)

                uploadString(M_userCreds, JSON.stringify(M_db), 'raw', { contentType: 'application/json' }).then(() => {
                    return res.status(200).json({
                        verdict: `removed ${client_username}`
                    });
                });
            }
            else if (verifyClient) {
                const username = req.body.username
                const name = req.body.name
                const contact = req.body.contact

                const c_db = await loadInfo(C_userCreds)
                const userInfo = findUserProfile(c_db, username);
                if (userInfo != undefined) {
                    const db_name = userInfo.name
                    const db_contact = userInfo.contact

                    let correctName = bcrypt.compareSync(name, db_name);
                    let correctContact = bcrypt.compareSync(contact, db_contact)

                    const verdict = correctName && correctContact

                    if (verdict) {
                        const profile = findUserProfile(c_db, username)
                        const db_current = await loadInfo(currentUser)


                        const data = {
                            username: username,
                            name: profile.name,
                        }

                        db_current['client'] = data


                        uploadString(currentUser, JSON.stringify(db_current), 'raw', { contentType: 'application/json' })

                        return res.status(200).json({
                            'verdict': verdict
                        });
                    }
                    else {
                        return res.status(200).json({
                            'verdict': false,
                            reason: "incorrect username or password"
                        });
                    }
                }

                else {
                    return res.status(200).json({
                        'verdict': false,
                        'reason': `${username} does not exist`
                    });
                }
            }
            else if (verifyManager) {
                const username = req.body.username;
                const email = req.body.email;
                const password = req.body.password;

                const M_db = await loadInfo(M_userCreds)

                const managerInfo = findUserProfile(M_db, username);
                if (managerInfo != undefined) {
                    const db_email = managerInfo.email;
                    const db_password = managerInfo.password
                    const correctEmail = email == db_email
                    const correctPassword = bcrypt.compareSync(password, db_password);

                    const verdict = correctEmail && correctPassword;

                    if (verdict) {
                        const db_current = await loadInfo(currentUser)

                        const profile = findUserProfile(M_db, username)

                        const data = {
                            username: username,
                            name: profile.name,
                            clients: profile.clients
                        }

                        db_current['manager'] = data

                        uploadString(currentUser, JSON.stringify(db_current), 'raw', { contentType: 'application/json' })

                        return res.status(200).json({
                            'verdict': verdict
                        });
                    }
                    else {
                        return res.status(200).json({
                            'verdict': false,
                            reason: "incorrect username or password"
                        });
                    }
                }

                else {
                    return res.status(200).json({
                        verdict: false,
                        reason: `${username} does not exist`
                    });
                }
            }
            else if (verifyAdmin) {
                const username = req.body.username
                const email = req.body.email
                const name = req.body.name
                const password = req.body.password

                const a_db = await loadInfo(A_userCreds)
                const userInfo = findUserProfile(a_db, username)
                if (userInfo != undefined) {
                    const db_email = userInfo.email
                    const db_password = userInfo.password
                    const db_name = userInfo.name

                    let correctEmail = bcrypt.compareSync(email, db_email);
                    let correctPassword = bcrypt.compareSync(password, db_password);
                    let correctName = bcrypt.compareSync(name, db_name);

                    const verdict = correctEmail && correctPassword && correctName;

                    if (verdict) {
                        const profile = findUserProfile(a_db, username)

                        const db_current = await loadInfo(currentUser)

                        const data = {
                            managers_username: username,
                            name: profile.name,
                        }

                        db_current['admin'] = data

                        uploadString(currentUser, JSON.stringify(db_current), 'raw', { contentType: 'application/json' })

                        return res.status(200).json({
                            'verdict': verdict
                        });
                    }
                    else {
                        return res.status(200).json({
                            'verdict': false,
                            reason: "incorrect username or password"
                        });
                    }
                }

                else {
                    return res.status(200).json({
                        'verdict': false,
                        'reason': `${username} does not exist`
                    });
                }
            }
            else if (addAdmin) {
                if (req.method != 'POST') {
                    return res.status(405).json({ error: "Method not allowed" })
                }

                const username = req.body.username;
                const email = req.body.email;
                const name = req.body.name;
                const password = req.body.password;

                const A_db = await loadInfo(A_userCreds);
                let isExistingUser = findUserProfile(A_db, username)

                if (isExistingUser != undefined) {
                    return res.status(200).json({ verdict: `Account with username ${username} already exists` });
                }

                else {
                    const saltRounds = 10;
                    const username_hash = bcrypt.hashSync(username, saltRounds)
                    const name_hash = bcrypt.hashSync(name, saltRounds)
                    const email_hash = bcrypt.hashSync(email, saltRounds)
                    const password_hash = bcrypt.hashSync(password, saltRounds)

                    let newUser = {
                        [username_hash]:
                        {
                            email: email_hash,
                            name: name_hash,
                            password: password_hash
                        }
                    }

                    Object.assign(A_db, newUser)

                    uploadString(A_userCreds, JSON.stringify(A_db), 'raw', { contentType: 'application/json' }).then(() => {
                        return res.status(200).json({
                            'verdict': `New user ${username} has been created`
                        });
                    });
                }
            }
            else if (addManager) {
                const username = req.body.username;
                const email = req.body.email;
                const name = req.body.name;
                const password = req.body.password;

                const M_db = await loadInfo(M_userCreds)
                let isExistingUser = findUserProfile(M_db, username)

                if (isExistingUser != undefined) {
                    return res.status(200).json({ verdict: `Account with username ${username} already exists` });
                }

                else {
                    const saltRounds = 5;
                    const username_hash = bcrypt.hashSync(username, saltRounds)
                    const password_hash = bcrypt.hashSync(password, saltRounds)

                    let newUser = {
                        [username_hash]:
                        {
                            name,
                            email,
                            password: password_hash,
                            contact: "",
                            clients: {}
                        }
                    }

                    Object.assign(M_db, newUser)

                    uploadString(M_userCreds, JSON.stringify(M_db), 'raw', { contentType: 'application/json' }).then(() => { // ? how long???
                        return res.status(200).json({
                            verdict: `New user ${username} has been created`,
                            newUser: newUser
                        });
                    });
                }
            }
            else if (deleteManager) {
                if (req.method != 'POST') {
                    return res.status(405).json({ error: "Method not allowed" })
                }

                const username = req.body.username;

                const M_db = await loadInfo(M_userCreds)

                delete M_db[find_db_username(M_db, username)]

                uploadString(M_userCreds, JSON.stringify(M_db), 'raw', { contentType: 'application/json' }).then(() => {
                    return res.status(200).json({
                        verdict: `removed ${username}`
                    });
                });
            }
            else if (deleteAdmin) {
                if (req.method != 'POST') {
                    return res.status(405).json({ error: "Method not allowed" })
                }

                const username = req.body.username;

                const A_db = await loadInfo(A_userCreds)

                delete A_db[find_db_username(A_db, username)]

                uploadString(A_userCreds, JSON.stringify(A_db), 'raw', { contentType: 'application/json' }).then(() => {
                    return res.status(200).json({
                        verdict: `removed ${username}`
                    });
                });
            }
        }
        catch (error) {
            console.log("Something went wrong (userOps): ", error)
            return res.status(500).json({ error: "Interal server error (userOps)" })
        }
    })
})

const stockTickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "DELL", "AMD", "NVDA"];
const cryptoTickers = ["BTC-USD", "ETH-USD", "DOGE-USD"];

exports.history = onRequest({ region: 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {

        const currentTime = Math.floor(new Date().getTime() / 1000)

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

        var requestedPeriod = req.body.requestedPeriod;

        var period1;
        var period2;
        var interval;

        if (!requestedPeriod) {
            const unit = allPeriods['1D'];
            period1 = unit.period1
            period2 = unit.period2
            interval = unit.interval
            requestedPeriod = '1D'
        }
        else {
            const unit = allPeriods[requestedPeriod];
            period1 = unit.period1
            period2 = unit.period2
            interval = unit.interval
        }

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

                    // ? is it possible to loop through raw_data once for the histData, min and max??
                    const histData = raw_data.quotes.map(entry => ({
                        Date: new Date(entry.date).toUTCString(),
                        currentPrice: assetInfo.price.regularMarketPrice || "N/A",
                        Open: entry.open,
                        Close: entry.close,
                        Volume: entry.volume
                    }));

                    const highest = raw_data.quotes.reduce((max, entry) => (entry.high !== undefined && entry.high > max.high ? entry : max), raw_data.quotes[0]);
                    const lowest = raw_data.quotes.reduce((min, entry) => (entry.low !== null && entry.low !== undefined && (min.low === null || entry.low < min.low) ? entry : min), { low: null });

                    historicalData[ticker] = {
                        name: assetName,
                        highestPriceOfDay: {
                            time: new Date(highest.date).toUTCString() || 'N/A',
                            price: highest.high || 0
                        },
                        lowestPriceOfDay: {
                            time: new Date(lowest.date).toUTCString() || 'N/A',
                            price: lowest.low || 0
                        },
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
                stockTickers: stockTickers,
                cryptoTickers: cryptoTickers,
                stocks_history: stocksData,
                cryptos_history: cryptosData
            };

            const periodData = `${requestedPeriod}.json`
            const historicalData = ref(storage, periodData)

            uploadString(historicalData, JSON.stringify(allData), 'raw', { contentType: 'application/json' }).then(() => {
                return res.status(200).json({
                    message: `${periodData} was saved to Firebase successfully`,
                    data: allData
                });
            });

        } catch (error) {
            console.error("Error fetching historical data:", error.message);
            return res.status(500).json({ error: "Failed to fetch historical data" });
        }
    });
});

async function use_history() {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/history', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
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

exports.priceAlert = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        const scrapedHistory = await use_history();

        function actualChange(open, currentPrice) {
            return ((open / currentPrice) * 100) - 100
        }

        async function getAlertData(tickers, is_Stock) {
            var alertInfo = [];
            var requestedAsset;

            for (let i = 0; i < tickers.length; i++) {
                requestedAsset = tickers[i];

                const All_assetData = scrapedHistory.data

                var historyData;

                if (is_Stock) {
                    historyData = All_assetData.stocks_history[requestedAsset].history[0];
                }
                else {
                    historyData = All_assetData.cryptos_history[requestedAsset].history[0];
                }

                const currentPrice = historyData.currentPrice
                const open = historyData.Open

                const change = Math.round(actualChange(open, currentPrice) * 100) / 100;

                if (change > 0) {
                    alertInfo.push(`${requestedAsset} is up by ${change}%`)
                }
                else if (change < 0) {
                    alertInfo.push(`${requestedAsset} is down by ${change}%`)
                }

            }
            return alertInfo;
        }

        try {
            const stockAlerts = await getAlertData(stockTickers, true)
            const cryptoAlerts = await getAlertData(cryptoTickers, false)

            return res.status(200).json({
                stockAlerts: stockAlerts,
                cryptoAlerts: cryptoAlerts
            })
        }

        catch (error) {
            console.error('Error fetching alert data', error.message);
        }
    })
})



/* 
? to start the backend server run "firebase eumlators:start" in "functions" folder
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/userOps
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/showDB
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/aiGen
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/scraper
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/history
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/updateManagersDetails
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/priceAlert
*/
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

// for arnas
const AI_reccomend = ref(storage, 'AI_reccomend.json') 
const AI_blog = ref(storage, 'AI_blog.json')
const AI_report = ref(storage, 'AI_report.json')
const AI_chatBot = ref(storage, 'AI_chatBot.json')

const companyNameRef = ref(storage, 'companyName.json');

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

async function isManagerOfClient(clients_username, managers_username) {
    const M_db = await loadInfo(M_userCreds)
    const clientList = Object.keys(M_db[find_db_username(M_db, managers_username)].clients)

    for (let i = 0; i < clientList.length; i++) {
        const key = clientList[i]
        if (bcrypt.compareSync(clients_username, key)) {
            return true
        }
    }
    return false
}

exports.addAsset = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            const managers_username = req.body.managers_username
            const clients_username = req.body.clients_username
            const name = req.body.name
            const assetSymbol = req.body.assetSymbol
            const currentPrice = req.body.currentPrice
            const amountBought = req.body.amountBought

            const admins_username = req.body.admins_username

            const data = {
                name,
                currentPrice,
                amountBought
            }

            if (admins_username != null) {
                const A_db = await loadInfo(A_userCreds)
                const db_admin_username = find_db_username(A_db, admins_username)
                A_db[db_admin_username].portfolio[assetSymbol] = data;

                uploadString(A_userCreds, JSON.stringify(A_db), 'raw', { contentType: 'application/json' }).then(() => {
                    return res.status(200).json({
                        verdict: `Admin ${admins_username} added the asset ${assetSymbol} (${name}) to their portfolio`,
                        data
                    });
                });

            }
            else if (managers_username != null && clients_username != null) {
                const C_db = await loadInfo(C_userCreds)
                const M_db = await loadInfo(M_userCreds)
                const db_current = await loadInfo(currentUser)

                const db_managers_username = find_db_username(M_db, managers_username)
                const db_clients_username = find_db_username(C_db, clients_username)

                if (M_db[db_managers_username].clients[clients_username] == undefined) {
                    M_db[db_managers_username].clients[clients_username] = {}
                }
                if (M_db[db_managers_username].clients[clients_username].portfolio == undefined) {
                    M_db[db_managers_username].clients[clients_username].portfolio = {}
                }
                M_db[db_managers_username].clients[clients_username].portfolio[assetSymbol] = data


                if (isManagerOfClient(clients_username, managers_username) == false) {
                    return res.status(200).json({ error: `The client ${clients_username} is not managed by ${managers_username}` })
                }


                const clientBank = C_db[db_clients_username].cash
                const bal = clientBank - currentPrice
                const canAfford = bal >= 0 ? true : false
                if (canAfford) {
                    C_db[db_clients_username].cash = bal


                    M_db[db_managers_username].clients[clients_username].cash = bal

                    C_db[db_clients_username].portfolio[assetSymbol] = data
                    const managerProfile = {
                        [managers_username]: M_db[db_managers_username]
                    }

                    db_current['manager'] = managerProfile

                    uploadString(currentUser, JSON.stringify(db_current), 'raw', { contentType: 'application/json' })

                    uploadString(C_userCreds, JSON.stringify(C_db), 'raw', { contentType: 'application/json' })

                    uploadString(M_userCreds, JSON.stringify(M_db), 'raw', { contentType: 'application/json' }).then(() => {
                        return res.status(200).json({
                            verdict: `${managers_username} added ${assetSymbol} (${name}) to ${clients_username}'s portfolio`,
                            data
                        });
                    });
                }
                else {
                    return res.status(200).json({ error: `The client ${clients_username} does not have enough money to buy ${name} @ ${amountBought} units` })
                }
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

            const history = (await use_history()).data;

            const isStock = stockTickers.includes(assetSymbol)
            var currentPrice
            var arr
            if (isStock) {
                arr = history.stocks_history[assetSymbol].history.length
                currentPrice = history.stocks_history[assetSymbol].history[arr - 1].currentPrice
            }
            else {
                arr = history.cryptos_history[assetSymbol].history.length
                currentPrice = history.cryptos_history[assetSymbol].history[arr - 1].currentPrice
            }

            const db_current = await loadInfo(currentUser)

            if (admins_username != null) {
                const A_db = await loadInfo(A_userCreds)

                const db_admin_username = find_db_username(A_db, admins_username)
                const portfolio = A_db[db_admin_username].portfolio
                const isOwned = isOwnedAsset(portfolio, assetSymbol)

                if (isOwned) {
                    delete A_db[db_admin_username].portfolio[assetSymbol]

                    A_db[db_admin_username].cash += currentPrice

                    db_current['admin'] = A_db['admin'] = A_db[db_admin_username]

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

                if (find_db_username(M_db, managers_username) == undefined) {
                    return res.status(200).json({ error: `The manager ${managers_username} does not exist` })
                }

                if (isManagerOfClient(clients_username, managers_username) == false) {
                    return res.status(200).json({ error: `The client ${clients_username} is not managed by ${managers_username}` })
                }

                const portfolio = M_db[find_db_username(M_db, managers_username)].clients[clients_username].portfolio
                const isOwned = isOwnedAsset(portfolio, assetSymbol)

                if (isOwned) {
                    const db_managers_username = find_db_username(M_db, managers_username)
                    const db_clients_username = find_db_username(C_db, clients_username)

                    delete M_db[db_managers_username].clients[clients_username].portfolio[assetSymbol]
                    delete C_db[db_clients_username].portfolio[assetSymbol]

                    C_db[db_clients_username].cash += currentPrice
                    M_db[db_managers_username].clients[clients_username].cash += currentPrice

                    db_current['manager'] = {
                        [managers_username]: M_db[db_managers_username]
                    }

                    uploadString(C_userCreds, JSON.stringify(C_db), 'raw', { contentType: 'application/json' })

                    uploadString(currentUser, JSON.stringify(db_current), 'raw', { contentType: 'application/json' })

                    uploadString(M_userCreds, JSON.stringify(M_db), 'raw', { contentType: 'application/json' }).then(() => {
                        return res.status(200).json({
                            verdict: `${managers_username} removed ${assetSymbol} from ${clients_username}'s portfolio`,
                        });
                    });
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

                    const newClient =
                    {
                        name: client_name,
                        contact: client_contact,
                        cash: cash,
                        managers_username: bcrypt.hashSync(managers_username, 5),
                        portfolio: {}
                    }


                    const M_db = await loadInfo(M_userCreds)

                    C_db[bcrypt.hashSync(client_username, 5)] = newClient

                    uploadString(C_userCreds, JSON.stringify(C_db), 'raw', { contentType: 'application/json' })

                    const managerProfile = findUserProfile(M_db, managers_username)
                    managerProfile.clients[client_username] = newClient

                    const db_current = await loadInfo(currentUser)

                    db_current['manager'] = managerProfile

                    uploadString(currentUser, JSON.stringify(db_current), 'raw', { contentType: 'application/json' })


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
                        db_current['manager'] = {
                            [username]: findUserProfile(M_db, username)
                        }

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

        const currentTime = Math.floor(new Date().getTime() / 1000);

        const allPeriods = {
            '1D': {
                period1: currentTime - 24 * 60 * 60, // 1 day ago
                period2: currentTime,
                interval: '1m'
            },
            '1W': {
                period1: currentTime - 7 * 24 * 60 * 60, // 1 week ago
                period2: currentTime,
                interval: '5m'
            },
            '1M': {
                period1: currentTime - 30 * 24 * 60 * 60, // 1 month ago
                period2: currentTime,
                interval: '15m'
            },
            '6M': {
                period1: currentTime - 6 * 30 * 24 * 60 * 60, // 6 months ago
                period2: currentTime,
                interval: '1h'
            },
            '1Y': {
                period1: currentTime - 365 * 24 * 60 * 60, // 1 year ago
                period2: currentTime,
                interval: '1d'
            }
        };

        const requestedPeriod = req.body.requestedPeriod || '1D';
        const { period1, period2, interval } = allPeriods[requestedPeriod];

        async function fetchHistoryData(tickers) {
            const historicalData = {};

            for (const ticker of tickers) {
                try {
                    const assetInfo = await yahooFinance.quoteSummary(ticker, { modules: ["price"] }).catch(() => null);
                    if (!assetInfo || !assetInfo.price) {
                        console.warn(`No price data for ${ticker}`);
                        continue;
                    }

                    const assetName = assetInfo.price.shortName || "N/A";

                    const rawData = await yahooFinance.chart(ticker, {
                        period1,
                        period2,
                        interval
                    }).catch(() => null);

                    if (!rawData || !rawData.quotes) {
                        console.warn(`No chart data for ${ticker}`);
                        continue;
                    }

                    const quotes = rawData.quotes.filter(entry => entry.open !== null && entry.close !== null && entry.volume !== null);

                    const histData = quotes.map(entry => ({
                        Date: new Date(entry.date).toUTCString(),
                        currentPrice: assetInfo.price.regularMarketPrice || "N/A",
                        Open: entry.open,
                        Close: entry.close,
                        Volume: entry.volume
                    }));

                    const highest = quotes.reduce((max, entry) => (entry.high !== null && entry.high > (max.high || -Infinity) ? entry : max), {});
                    const lowest = quotes.reduce((min, entry) => (entry.low !== null && entry.low < (min.low || Infinity) ? entry : min), {});

                    historicalData[ticker] = {
                        name: assetName,
                        highestPriceOfDay: {
                            time: highest.date ? new Date(highest.date).toUTCString() : 'N/A',
                            price: highest.high || 0
                        },
                        lowestPriceOfDay: {
                            time: lowest.date ? new Date(lowest.date).toUTCString() : 'N/A',
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
                stockTickers,
                cryptoTickers,
                stocks_history: stocksData,
                cryptos_history: cryptosData
            };

            const periodData = `${requestedPeriod}.json`;
            const historicalDataRef = ref(storage, periodData);

            uploadString(historicalDataRef, JSON.stringify(allData), 'raw', { contentType: 'application/json' });
            return res.status(200).json({
                message: `${periodData} was saved to Firebase successfully`,
                data: allData
            });
        } catch (error) {
            console.error("Error saving historical data:", error.message);
            return res.status(500).json({ error: "Failed to fetch and save historical data" });
        }
    });
});

async function use_history() {
    try {
        const response = await fetch('https://history-ieevug7ulq-nw.a.run.app', {
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


exports.setReview = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        const { username, star } = req.body

        const A_db = await loadInfo(A_userCreds)

        A_db[find_db_username(A_db, username)].rating = star

        uploadString(A_userCreds, JSON.stringify(A_db), 'raw', { contentType: 'application/json' }).then(() => {
            return res.status(200).json({
                verdict: `Admin ${username} has left a review`,
                star
            });
        })
    })
})

exports.AI_reccomend = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        if (req.method == "POST") {
            const data = req.body.data
            uploadString(AI_reccomend, JSON.stringify(data), 'raw', { contentType: 'application/json' }).then(() => {
                return res.status(200).json({
                    data
                });
            })
        }
        else {
            const data = await loadInfo(AI_reccomend)
            return res.status(200).json({
                data
            });
        }
    })
})

exports.AI_blog = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        if (req.method == "POST") {
            const data = req.body.data
            uploadString(AI_blog, JSON.stringify(data), 'raw', { contentType: 'application/json' }).then(() => {
                return res.status(200).json({
                    data
                });
            })
        }
        else {
            const data = await loadInfo(AI_blog)
            return res.status(200).json({
                data
            });
        }
    })
})

exports.AI_report = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        if (req.method == "POST") {
            const data = req.body.data
            uploadString(AI_report, JSON.stringify(data), 'raw', { contentType: 'application/json' }).then(() => {
                return res.status(200).json({
                    data
                });
            })
        }
        else {
            const data = await loadInfo(AI_report)
            return res.status(200).json({
                data
            });
        }
    })
})

exports.AI_chatBot = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        if (req.method == "POST") {
            const data = req.body.data
            uploadString(AI_chatBot, JSON.stringify(data), 'raw', { contentType: 'application/json' }).then(() => {
                return res.status(200).json({
                    data
                });
            })
        }
        else {
            const data = await loadInfo(AI_chatBot)
            return res.status(200).json({
                data
            });
        }
    })
})

exports.companyName = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        if (req.method == "POST") {
            const companyName = req.body.companyName
            uploadString(companyNameRef, JSON.stringify(companyName), 'raw', { contentType: 'application/json' }).then(() => {
                return res.status(200).json({
                    companyName
                });
            })
        }
        else {
            const companyName = await loadInfo(companyNameRef)
            return res.status(200).json({
                companyName
            });
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
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/addAsset
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/removeAsset
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/AI_report
*/
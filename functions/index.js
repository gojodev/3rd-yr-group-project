const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase/app");
const bcrypt = require('bcrypt');

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

async function loadInfo(data) {
    return await Promise.resolve(getRef_json(data));
}

function genId(type, name, email) {
    return `${type}_${bcrypt.hashSync(`${type}_${name}_${email}`, 5)}`
}

exports.showDB = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        let db = await loadInfo(A_userCreds);
        res.json(db);

    }
    catch (error) {
        console.log('Couldnt access the database: ', error)
        res.status(500).json({ error: "Interal server error" })
    }
});

function missingInfoWarning(arr) {
    let missingItems = [];
    for (var item in arr) {
        if (!item) {
            missingItems.push(item)
        }
    }

    return missingItems
}

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
        console.log("Couldnt has string: ", error)
        res.status(500).json({ error: "Interal server error" })
    }
});


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
            res.status(200).json({ error: `Account with email ${client_email} already exists` });
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

/* 
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/showDB
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyAdmin
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/addAdmin
*/

/*
? to start the backend server run "firebase eumlators:start" in "functions" folder

Fund manager - manages clients
clients - cant make their own trades but can view the trades that the fund manager makes for them
fund admin - can make their own trades (like a client but with more power)
*/
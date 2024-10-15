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
const userCreds = ref(storage, 'userCreds.json');

async function loadInfo() {
    return await Promise.resolve(getRef_json(userCreds));
}

exports.showDB = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        let db = await loadInfo();
        res.json(db);

    }
    catch (error) {
        console.log('Couldnt access the database: ', error)
        res.status(500).json({ error: "Interal server error" })
    }
});

exports.verifyUser = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        if (req.method != 'POST') {
            res.status(405).json({ error: "Method not allowed" })
        }

        const client_username = req.body.username;
        const client_email = req.body.email;
        const client_password = req.body.password;
        const isFundManager = req.body.isFundManager;
        const clients = [];

        let db_username = '';

        const db = await loadInfo();

        for (var key in db) {
            db_username = bcrypt.compareSync(client_username, key)
            if (db_username) {
                db_username = key
                break
            }
        }

        const userInfo = db[db_username];

        if (userInfo != undefined) {
            const db_email = userInfo.email;
            const db_password = userInfo.password;

            if (!client_email || !client_password || !client_username || isFundManager == undefined) {
                res.status(400).json({ error: "All Information is required in the JSON body" });
            }

            let correctEmail = bcrypt.compareSync(client_email, db_email);
            let correctPassword = bcrypt.compareSync(client_password, db_password);
            let verdict = correctEmail && correctPassword;

            res.status(200).json({
                'verdict': verdict,
                "isFundManager": isFundManager,
                clients: []
            });
        }

        else {
            res.status(200).json({
                'verdict': false,
                "isFundManager": isFundManager,
                clients: []
            });
        }
    }

    catch (error) {
        console.log("Couldnt has string: ", error)
        res.status(500).json({ error: "Interal server error" })
    }
});

async function verifyUser_client(username, email, password, isFundManager) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                isFundManager: isFundManager,
                clients: []
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

exports.addUser = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        if (req.method != 'POST') {
            res.status(405).json({ error: "Method not allowed" })
        }

        const client_username = req.body.username;
        const client_email = req.body.email;
        const client_password = req.body.password;
        const isFundManager = req.body.isFundManager;
        const clients = req.body.clients;

        let isExistingUser = await verifyUser_client(client_username, client_email, client_password)

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


            const db = await loadInfo();

            Object.assign(db, newUser)

            uploadString(userCreds, JSON.stringify(db)).then(() => {
                res.status(200).json({
                    'verdict': `New user ${client_username} has been created`,
                    "isFundManager": isFundManager,
                    "clients": clients
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
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyUser
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/addUser
*/

/*
? to start the backend server run "npm run start" or "firebase eumlators:start" in "functions" folder
*/
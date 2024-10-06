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

const { getStorage, ref, getDownloadURL, uploadString, connectStorageEmulator } = require("firebase/storage");
const { onVelocityAlertPublished } = require("firebase-functions/alerts/crashlytics");

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
        if (req.method !== "POST") {
            res.status(405).json({ error: "Method Not Allowed" });
        }

        const username = req.body.username;

        if (!username) {
            res.status(400).json({ error: "Username is required in the JSON body" });
        }

        const db = await loadInfo();

        const userInfo = db[username];

        if (!userInfo) {
            res.status(404).json({ error: "User not found" });
        }

        console.log(userInfo);
        res.status(200).json(userInfo);
    } catch (error) {
        console.error("Error verifying user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

exports.hashCreds = onRequest({ 'region': 'europe-west2' }, async (req, res) => {
    try {
        if (req.method != 'POST') {
            res.status(405).json({ error: "Method not allowed" })
        }

        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const db = await loadInfo();
        const userInfo = db[username];

        const correct_email = userInfo.email;
        const correct_password = userInfo.password;

        if (!email || !password) {
            res.status(400).json({ error: "Email and password is required in the JSON body" });
        }

        // basically the cost factor the higher this factor the more hashing is done and the longer it take to hasn
        const saltRounds = 10;

        bcrypt.hash(email, saltRounds, async (email_error, email_hash) => {
            bcrypt.hash(password, saltRounds, async (password_error, password_hash) => {

                let correctEmail = await bcrypt.compare(correct_email, email_hash);
                let correctPassword = await bcrypt.compare(correct_password, password_hash);
                let verdict = correctEmail && correctPassword;

                res.status(200).json({
                    'correctEmail': correctEmail,
                    'correctPassword': correctPassword,

                    'correct_email': correct_email,
                    'correct_password': correct_password,

                    'given_email': email,
                    'given_password': password,
                });
            })
        })
    }
    catch (error) {
        console.log("Couldnt has string: ", error)
        res.status(500).json({ error: "Interal server error" })
    }
});

// exports.hashString = onRequest({ 'region': 'europe-west2' }, async (req, res) => {

// });

/* 
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/showDB
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyUser
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/hashCreds
*/
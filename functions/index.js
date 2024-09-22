// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const { logger } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase/app");

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
const { log } = require("firebase-functions/logger");

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

var credsArr;

async function loadInfo() {

    return await Promise.resolve(getRef_json(userCreds));
}

function isUser(email) {
    let username = getUsername(email);
    return credsArr[username] != undefined;
}


// https://youtu.be/2u6Zb36OQjM?si=AFUnR5pPw9IQPzoG&t=511


exports.showDB = onRequest(async (req, res) => {
    // Grab the text parameter
    const original = req.query.text;

    const db = JSON.stringify(await loadInfo());
    res.json({ result: `${db}` });
    log(db);
    console.log(db)
});
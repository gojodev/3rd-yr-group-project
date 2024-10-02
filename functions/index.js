// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const { logger } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");

// The Firebase Admin SDK to access Firestore.
const { initializeApp } = require("firebase/app");

const functions = require('firebase-functions');
const express = require('express');
const app = express();

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


// ? you have to make a request to the database in all firebase functions and you cant have it as a global variable sadly
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

        const { username } = req.body;

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
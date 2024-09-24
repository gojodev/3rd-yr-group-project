// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const { logger } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");

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


// i am trying to get the username from the url so it should be 'verifyUser/user1'
// http://127.0.0.1:5001/rd-year-project-1f41d/us-central1/verifyUser
// could you try using req.params? idk if that works in firebase functions tho i never tried it
exports.verifyUser = onRequest(async (req, res) => {
    const username = req.params.text;

    console.log('username: ', username);

    const db = await loadInfo();

    let user = db[username];

    res.json({ 'username': username }) // ! checking that the username is read
});

//also bro have u tried printing out what does it say hmmmm
// it said 'undefined' thats prob cause i didnt properly fetch the info or something 
async ()=> {
    
}

// async function getUserCredentials(username) {
//     try {
//         const url = `https://rd-year-project-1f41d.cloudfunctions.net/verifyUser?text=${username}`;
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('User credentials:', data);
//         return data;
//     } catch (error) {
//         console.error('Error fetching user credentials:', error);
//         return null;
//     }
// }

// // Usage example:
// getUserCredentials('user1');
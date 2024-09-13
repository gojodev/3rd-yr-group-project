import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import Fuse from 'fuse.js';

const firebaseConfig = {
    apiKey: "AIzaSyAFayRb90ywbg82EcLOnH5iBDm3qnZx9TU",
    authDomain: "rd-year-project-1f41d.firebaseapp.com",
    projectId: "rd-year-project-1f41d",
    storageBucket: "rd-year-project-1f41d.appspot.com",
    messagingSenderId: "823208675027",
    appId: "1:823208675027:web:040ff96eac0fc89b0e3626",
    measurementId: "G-86DQSH17PT"
};

const app = initializeApp(firebaseConfig);

async function getRef_json(refItem) {
    const url = await getDownloadURL(refItem);
    const response = await fetch(url, { mode: 'cors' });
    let data = await response.text();
    data = JSON.parse(data);
    return data;
}

// ? may need this later
async function getRef_text(refItem) {
    const url = await getDownloadURL(refItem);
    const response = await fetch(url, { mode: 'cors' });
    let data = await response.text();
    return data;
}

var email = document.getElementById('email').value;
var password = document.getElementById('password').value;

function isUser(email) {
    let res = false;
    var test;

    let username = email.split('@gmail.com')[0];
    try {
        test = credsArr[username];
    }
    catch {
        res = (test == undefined) && (document.getElementById('password') == test.password) ? false : true;
    }
    return username;
}

const storage = getStorage(); // ! global
var credsArr; // ! global

async function loadInfo() {
    const soundsRef = ref(storage, 'userCreds.json');

    credsArr = await Promise.resolve(getRef_json(soundsRef));
    console.log(credsArr);
}

loadInfo();

let signInButton = document.getElementById('SignInButton');

signInButton, addEventListener('click', () => {
    if (email != "" && password != "") {
        if (isUser(email)) {
            console.log(email, password);
        }
        else {
            console.log(`${email}`)
        }
    }
});
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

function getUsername(email) {
    return email.split('@gmail.com')[0];
}

function isUser(email) {
    var test;
    let username = getUsername(email);
    try {
        test = credsArr[username];
        return true;
    }
    catch {
        return (test != undefined) ? true : false;
    }
}

function errorInput(elementsArr) {
    for (let i = 0; i < elementsArr.length; i++) {
        document.getElementById(elementsArr[i]).classList.add('errorBorder');
    }

    setTimeout(() => {
        for (let i = 0; i < elementsArr.length; i++) {
            document.getElementById(elementsArr[i]).classList.remove('errorBorder');
        }
    }, 3000);
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

// ! GLOBAL
var status = "";
var email = document.getElementById('email');
var password = document.getElementById('password');

email.addEventListener('click', () => {
    email.classList.toggle('errorBorder');
});

password.addEventListener('click', () => {
    password.classList.toggle('errorBorder');
});


signInButton.addEventListener('click', () => {
    var emailtext = email.value;
    var passwordtext = password.value;
    var username = getUsername(emailtext);
    var userCrds = credsArr[username];

    if (emailtext != "" && passwordtext != "") {
        if (emailtext != userCrds.email || passwordtext != userCrds.password) {
            status = 'incorrect username or password'
        }

        if (emailtext == userCrds.email && passwordtext == userCrds.password) {
            status = `${username} has logged in successfully`;
        }
    }

    if (emailtext == "" && passwordtext == "") {
        status = 'Please enter email and password'
    }
    else if (emailtext != "" && passwordtext == "") {
        status = 'Please enter password'
    }
    else if (emailtext == "" && passwordtext != "") {
        status = 'Please enter email'
    }
    else if (!isUser(emailtext)) {
        status = `no account associated with ${emailtext}`;
    }

    if (status != '') {
        var errorContainer = document.getElementById('errorContainer');
        errorContainer.style.display = "block";
        errorInput(['email', 'password']);
        document.getElementById('statusText').innerHTML = status;
    }
});
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, uploadString, connectStorageEmulator } from "firebase/storage";

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

// ! GLOBAL
var email = document.getElementById('email');
var password = document.getElementById('password');
var emailtext
var passwordtext
var username
var status = "";
var userCrds


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
    let username = getUsername(email);
    return credsArr[username] != undefined;
}

function removeErrorBorder(elementsArr) {
    for (let i = 0; i < elementsArr.length; i++) {
        document.getElementById(elementsArr[i]).classList.remove('errorBorder');
    }
}

function errorInput(elementsArr) {
    for (let i = 0; i < elementsArr.length; i++) {
        document.getElementById(elementsArr[i]).classList.add('errorBorder');
    }

    setTimeout(() => {
        removeErrorBorder(elementsArr);
    }, 3000);
}

const storage = getStorage(); // ! global
const userCreds = ref(storage, 'userCreds.json');
var credsArr; // ! global

if (location.hostname == "127.0.0.1") {
    connectStorageEmulator(storage, "127.0.0.1", 9199)
    console.log("USING EMULATORS DATABASE")
}

async function loadInfo() {
    credsArr = await Promise.resolve(getRef_json(userCreds));
    console.log(credsArr);
}

loadInfo();

var signInButton = document.getElementById('SignInButton');

email.addEventListener('click', () => {
    removeErrorBorder(['email']);
});

password.addEventListener('click', () => {
    removeErrorBorder(['password']);
});


function displayStatus(status) {
    document.getElementById('statusText').innerHTML = status;
}

function inputValidation(emailtext, passwordtext) {
    if (emailtext == "" && passwordtext == "") {
        status = 'Please enter email and password'
    }
    else if (emailtext != "" && passwordtext == "") {
        status = 'Please enter password'
    }
    else if (emailtext == "" && passwordtext != "") {
        status = 'Please enter email'
    }
    else if (isUser(emailtext) == false) {
        status = `no account associated with ${emailtext}`;
    }

    if (status != '') {
        errorInput(['email', 'password']);
        var errorContainer = document.getElementById('errorContainer');
        errorContainer.style.display = "block";

        displayStatus(status);
    }
}

signInButton.addEventListener('click', () => {
    emailtext = email.value;
    passwordtext = password.value;
    console.log('email: ', emailtext)

    username = getUsername(emailtext);
    userCrds = credsArr[username];
    console.log(credsArr)
    if (userCrds == undefined) {
        inputValidation(emailtext, passwordtext);
    }
    else {
        if (emailtext != userCrds.email || passwordtext != userCrds.password) {
            status = 'incorrect username or password'
        }
        if (emailtext == userCrds.email && passwordtext == userCrds.password) {
            status = `${username} has logged in successfully`;
        }
    }
});

var createAccount = document.getElementById('createAccount');
createAccount.addEventListener('click', () => {
    username = getUsername(emailtext);
    userCrds = credsArr[username];

    emailtext = email.value;
    passwordtext = password.value;
    let email_hash;
    let password_hash;


    bcrypt.hash(password2, saltRounds, (err, hash) => {
        console.log("password2 : ", hash);
    })


    let newUser = {
        'email': emailtext,
        'password': passwordtext
    }

    credsArr[`${username}`] = newUser;
    inputValidation(emailtext, passwordtext);

    status = 'New user created';
    displayStatus(status);
    console.log(userCrds)

    // todo upload updated JSON to firebase
    uploadString(userCreds, JSON.stringify(credsArr)).then(() => {
        console.log(`update database with ${newUser}`);
    });
})

function testInput() {
    email.value = 'user4@gmail.com'
    password.value = 'user4_password!'
    console.log('inputs set')
}

testInput();

// ! SUCCESS
async function verifyUser() {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'user2', // Replace 'user2' with the desired username variable
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        console.log('User Credentials:', userData); // Log the user data returned from the server
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}
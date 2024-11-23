const { initializeApp } = require("firebase/app");
const bcrypt = require('bcrypt')

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

async function loadInfo(data) {
    return await Promise.resolve(getRef_json(data));
}

const storage = getStorage();
const M_userCreds = ref(storage, 'M_userCreds.json'); // manager
async function test() {
    const client_username = 'm_jing'
    const client_email = 'm_jing@gmail.com';
    const client_name = 'jing hua ye';
    const client_password = 'm_jing_password!';

    const saltRounds = 5;
    const username_hash = bcrypt.hashSync(client_username, saltRounds)
    const email_hash = bcrypt.hashSync(client_email, saltRounds)
    const password_hash = bcrypt.hashSync(client_password, saltRounds)
    const name_hash = bcrypt.hashSync(client_name, saltRounds)

    let newUser = {
        [username_hash]:
        {
            name: name_hash,
            email: email_hash,
            password: password_hash
        }
    }

    const db = await loadInfo(M_userCreds)

    Object.assign(db, newUser)

    uploadString(M_userCreds, JSON.stringify(db)).then(() => { // ? how long???
        console.log({
            verdict: `New user ${client_username} has been created`,
            newUser: newUser
        });
    });
}


test()
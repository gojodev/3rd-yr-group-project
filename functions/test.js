// import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');

const saltRounds = 10; // basically the cost factor the higher this factor the more hashing is done and the longer it take to hasn

var userCreds = {
    "user1": {
        "email": "user1@gmail.com",
        "password": "user1_password!"
    },
    "user2": {
        "email": "user2@gmail.com",
        "password": "user2_password!"
    },
    "user3": {
        "email": "user3@gmail.com",
        "password": "user3_password!"
    }
};

var email_hash = "";
var password_hash = "";
for (key in userCreds) {
    let email = userCreds[key].email;
    let password = userCreds[key].password;

    bcrypt.hash(email, saltRounds, (err, hash) => {
        userCreds[key].email = hash;
    })

    bcrypt.hash(password, saltRounds, (err, hash) => {
        userCreds[key].password = hash;
    })

    userCreds[key].email = email_hash;
    userCreds[key].password = password_hash
}


console.log(userCreds);

// const password1 = 'mypass'
// const password2 = 'otherMyPass'
// bcrypt.hash(password1, saltRounds, (err, hash) => {
//     console.log("password1 : ", hash);
// })

// bcrypt.hash(password2, saltRounds, (err, hash) => {
//     console.log("password2 : ", hash);
// })

// // ? gonna use async and await to properly wait for results
// async function checkUser(username, password) {
//     const match = await bcrypt.compare(password, password1_hash);

//     console.log("match : ", match);
// }

// checkUser('user1', password1)
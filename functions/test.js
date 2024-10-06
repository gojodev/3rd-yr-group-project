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

for (key in userCreds) {
    let email = userCreds[key].email;
    let password = userCreds[key].password;


    bcrypt.hash(email, saltRounds, (err, email_hash) => {
        bcrypt.hash(password, saltRounds, (err, password_hash) => {
            console.log(email, email_hash)

            console.log(password, password_hash)
            bcrypt.compare(email, email_hash, (err, email_res) => {
                bcrypt.compare(password, password_hash, (err, password_res) => {
                    console.log(email_res, password_res)
                })
            })
            console.log("\n")

        })
    })
}

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
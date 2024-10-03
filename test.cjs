const bcrypt = require('bcrypt');
// import { bcrypt } from "bcrypt";
const saltRounds = 10; // basically the cost factor the higher this factor the more hashing is done and the longer it take to hasn
const password1 = 'mypass'
const password2 = 'otherMyPass'

const password1_hash = '$2b$10$.liwE/DyCR2Vnww5zZC20u.mgkpfwQ8sVckRDZDFY8UdcwUQuAPcS'
const password2_hash = '$2b$10$dNV6Kd2QD37R/k98l5guWe4v3dbcWMcKXxtI10V1BYuIQihtfEsT.'

bcrypt.hash(password1, saltRounds, (err, hash) => {
    console.log("password1 : ", hash);
})

bcrypt.hash(password2, saltRounds, (err, hash) => {
    console.log("password2 : ", hash);
})

// ? gonna use async and await to properly wait for results
async function checkUser(username, password) {
    const match = await bcrypt.compare(password, password1_hash);

    console.log("match : ", match);
}

checkUser('user1', password1) 
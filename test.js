let credsArr = {
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

let username = 'user4';
let email = 'user4@gmail.com'
let password = 'user4_password!'

let newUser = {
    'email': email,
    'password': password
}

credsArr[`${username}`] = newUser;

console.log(credsArr)

// console.log(newUser['user4'])


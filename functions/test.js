// import bcrypt from 'bcrypt';
const bcrypt = require('bcrypt');

var userCreds = {
    "$2b$10$jP.JE.3Mr1TIzWzwdXzsSuD9gbBk7aQ/ojq3cxyPhy/7L31J.lQkW": {
        "email": "$2b$10$4Ve8ynoiv7V7tfwdcwPtF.EiOxGwumRbXOYdYrtfjjDkl78VvZJYm",
        "password": "$2b$10$pXeT04LdC34Yh4rBg58HPeRbfML3Xyj96I41pIHP385SLamOgZlZ6"
    },
    "$2b$10$xrAAbCTxr1EDkk8Et4W1ueBCZ5tFNuFXwDZEQ603iPfPbZXlde1yO": {
        "email": "$2b$10$a.6SYekbpwhsl7W3uQqUMOhKuDBB90mO.4ZkY95o..ftvGB.WZ9CO",
        "password": "$2b$10$i5J96dxCXTQ7eebhl0Epl.NoD/qp97SA2VVj9LWaQBNzZaLWHOqg2"
    },
    "$2b$10$M3Q1B4ijUJmUffm0.aksU.wMp7SEzXyQsX56NvFwSuYDq9..ZpjC.": {
        "email": "$2b$10$pKDs4WT8QLmhniL.7JK0nu4gM.38xYzD5XhUOmY/sl3P/91CeuF0a",
        "password": "$2b$10$PGo7J9BSPfTfii75m.1lf.j5pWDMarqpEJx9/3dlJaWcGuGPXwudm"
    }
};

let client_username = 'user2'

for (var key in userCreds) {
    let db_username = bcrypt.compareSync(client_username, key)

    if (db_username) {
        console.log(client_username, key)
    }
}
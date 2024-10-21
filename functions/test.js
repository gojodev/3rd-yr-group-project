const bcrypt = require('bcrypt')

function genId(type, name, email) {
    return `${type}_${bcrypt.hashSync(`${type}_${name}_${email}`, 5)}`
}

// console.log(genId('M', 'Mfirst2 Mlast2', ''))

let hash = bcrypt.hashSync('081 343 3473', 5)
console.log(hash)
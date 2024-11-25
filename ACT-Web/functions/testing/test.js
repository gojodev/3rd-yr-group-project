const bcrypt = require('bcrypt')

const username = 'user4'

const username_hash = bcrypt.hashSync(username, 10)

console.log(username_hash)
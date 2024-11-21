const bcrypt = require('bcrypt')

console.log(bcrypt.compareSync('user1_password!', '$2b$10$pXeT04LdC34Yh4rBg58HPeRbfML3Xyj96I41pIHP385SLamOgZlZ6'))
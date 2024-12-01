const bcrypt = require('bcrypt')

console.log(bcrypt.compareSync('userX', '$2b$10$I6Wte7WzSh/ixjB5rIaUP.xpOET8gPaED6XX4W7kmLY4asOvKlh9i'))

const bcrypt = require('bcrypt')

const db = {
    "$2b$10$jP.JE.3Mr1TIzWzwdXzsSuD9gbBk7aQ/ojq3cxyPhy/7L31J.lQkW": {
        "name": "$2b$05$5XEXxbPP1FbAHyXLDOHuhufRHjpe8gfwl1DKtY6GvemCRkiTyHTTK",
        "email": "$2b$10$4Ve8ynoiv7V7tfwdcwPtF.EiOxGwumRbXOYdYrtfjjDkl78VvZJYm",
        "password": "$2b$10$pXeT04LdC34Yh4rBg58HPeRbfML3Xyj96I41pIHP385SLamOgZlZ6",
        "id": "A_$2b$05$JY0rzd48rF1LPV/0R.4Ds./ublblLDLJxwZLWomcOs0seqH1tCl5W"
    },
    "$2b$10$xrAAbCTxr1EDkk8Et4W1ueBCZ5tFNuFXwDZEQ603iPfPbZXlde1yO": {
        "name": "$2b$05$ylp/2vqHnyc86EF3/A.6F.50DsgjZpOZN1J80iqTqz.WIccaLNbim",
        "email": "$2b$10$a.6SYekbpwhsl7W3uQqUMOhKuDBB90mO.4ZkY95o..ftvGB.WZ9CO",
        "password": "$2b$10$i5J96dxCXTQ7eebhl0Epl.NoD/qp97SA2VVj9LWaQBNzZaLWHOqg2",
        "id": "A_$2b$05$6MidCJM6NJ/h7q/Lw1cny.M1qjSg3aTzsMD1WNUYS.x/3F3DWzdda"
    },
    "$2b$10$M3Q1B4ijUJmUffm0.aksU.wMp7SEzXyQsX56NvFwSuYDq9..ZpjC.": {
        "name": "$2b$05$k0N7j7XPoXc7ba6HOZuHu.yZcyohl.pRzDH.Yu/.GtsdTu8rRPjBW",
        "email": "$2b$10$pKDs4WT8QLmhniL.7JK0nu4gM.38xYzD5XhUOmY/sl3P/91CeuF0a",
        "password": "$2b$10$PGo7J9BSPfTfii75m.1lf.j5pWDMarqpEJx9/3dlJaWcGuGPXwudm",
        "id": "A_$2b$05$i16a13LTq3oKSx0fk9eajOfpy4K4vt42y13zYUD3U6aBDD2pHA0oe"
    }
}
const client_ID = 'A_$2b$05$JY0rzd48rF1LPV/0R.4Ds./ublblLDLJxwZLWomcOs0seqH1tCl5W'
const db_ID = db['$2b$10$jP.JE.3Mr1TIzWzwdXzsSuD9gbBk7aQ/ojq3cxyPhy/7L31J.lQkW'].id
let correctID = bcrypt.compareSync(client_ID, db_ID);

console.log()
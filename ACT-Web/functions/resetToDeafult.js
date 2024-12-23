const { getStorage, ref, uploadString } = require("firebase/storage");
const { initializeApp } = require("firebase/app");

const firebaseConfig = {
    apiKey: "AIzaSyAFayRb90ywbg82EcLOnH5iBDm3qnZx9TU",
    authDomain: "rd-year-project-1f41d.firebaseapp.com",
    projectId: "rd-year-project-1f41d",
    storageBucket: "rd-year-project-1f41d.appspot.com",
    messagingSenderId: "823208675027",
    appId: "1:823208675027:web:040ff96eac0fc89b0e3626",
    measurementId: "G-86DQSH17PT"
};

initializeApp(firebaseConfig);

const A_userCreds_data = {
    "$2b$10$jP.JE.3Mr1TIzWzwdXzsSuD9gbBk7aQ/ojq3cxyPhy/7L31J.lQkW": {
        "name": "$2b$05$5XEXxbPP1FbAHyXLDOHuhufRHjpe8gfwl1DKtY6GvemCRkiTyHTTK",
        "email": "$2b$10$4Ve8ynoiv7V7tfwdcwPtF.EiOxGwumRbXOYdYrtfjjDkl78VvZJYm",
        "password": "$2b$10$pXeT04LdC34Yh4rBg58HPeRbfML3Xyj96I41pIHP385SLamOgZlZ6",
        "cash": "500",
        "portfolio": {
            "AAPL": {
                "name": "Apple",
                "currentPrice": "141",
                "amountBought": "0.61"
            },
            "MICRO": {
                "name": "Microsoft",
                "currentPrice": "141",
                "amountBought": "0.61"
            }
        }
    },
    "$2b$10$xrAAbCTxr1EDkk8Et4W1ueBCZ5tFNuFXwDZEQ603iPfPbZXlde1yO": {
        "name": "$2b$05$ylp/2vqHnyc86EF3/A.6F.50DsgjZpOZN1J80iqTqz.WIccaLNbim",
        "email": "$2b$10$a.6SYekbpwhsl7W3uQqUMOhKuDBB90mO.4ZkY95o..ftvGB.WZ9CO",
        "password": "$2b$10$i5J96dxCXTQ7eebhl0Epl.NoD/qp97SA2VVj9LWaQBNzZaLWHOqg2",
        "cash": "500",
        "portfolio": {
            "AAPL": {
                "name": "Apple",
                "currentPrice": "141",
                "amountBought": "0.61"
            },
            "MICRO": {
                "name": "Microsoft",
                "currentPrice": "141",
                "amountBought": "0.61"
            }
        }
    },
    "$2b$10$M3Q1B4ijUJmUffm0.aksU.wMp7SEzXyQsX56NvFwSuYDq9..ZpjC.": {
        "name": "$2b$05$k0N7j7XPoXc7ba6HOZuHu.yZcyohl.pRzDH.Yu/.GtsdTu8rRPjBW",
        "email": "$2b$10$pKDs4WT8QLmhniL.7JK0nu4gM.38xYzD5XhUOmY/sl3P/91CeuF0a",
        "password": "$2b$10$PGo7J9BSPfTfii75m.1lf.j5pWDMarqpEJx9/3dlJaWcGuGPXwudm",
        "cash": "500",
        "portfolio": {
            "AAPL": {
                "name": "Apple",
                "currentPrice": "141",
                "amountBought": "0.61"
            },
            "MICRO": {
                "name": "Microsoft",
                "currentPrice": "141",
                "amountBought": "0.61"
            }
        }
    }
}

const M_userCreds_data = {
    "$2b$05$PSz14z6GK/7MEhMblOi3buMpdzzOEXI25OydbwoV6zqTQnaJzKLem": {
        "name": "Mfirst1 Mlast1",
        "email": "m_user1@gmail.com",
        "password": "$2b$05$fZTmA6nLg87A4aAPimY.l.yZ1HTlZAcJSuyLYqOoRZDX3YterOIwu",
        "contact": "081 143 3473",
        "clients": {
            "c_user1": {
                "name": "Cfirst1 Clast1",
                "contact": "081 343 3473",
                "cash": "500",
                "portfolio": {
                    "AAPL": {
                        "name": "Apple",
                        "currentPrice": "141",
                        "amountBought": "0.61"
                    },
                    "MICRO": {
                        "name": "Microsoft",
                        "currentPrice": "200",
                        "amountBought": "0.61"
                    }
                }
            }
        }
    },
    "$2b$05$qmJ1lAeKwSFqRUsCC/u2tOIeO/EKa2YY256A4AHcCsassIF.Q7ddu": {
        "name": "Mfirst2 Mlast2",
        "email": "m_user2@gmail.com",
        "password": "$2b$05$LFkH0aT4rgLE9PRsJ.uFOeRAUhyGoRkdjLIRmQL91v5zBFvGQ7oCC",
        "contact": "081 243 3473",
        "clients": {
            "c_user2": {
                "name": "Cfirst2 Clast2",
                "contact": "082 343 3473",
                "cash": "26000",
                "portfolio": {
                    "AAPL": {
                        "name": "Apple",
                        "currentPrice": "141",
                        "amountBought": "0.61"
                    },
                    "MICRO": {
                        "name": "Microsoft",
                        "currentPrice": "141",
                        "amountBought": "0.61"
                    }
                }
            }
        }
    },
    "m_us$2b$05$f5KL1hDqC76sFdU/jr22NOXjylRwyNc7PytdxbptrIxFnvCBg/UNier3": {
        "name": "Mfirst3 Mlast3",
        "email": "m_user3@gmail.com",
        "password": "$2b$05$KkF8icD1NzVGh4u4E1mF9OjHtmg3.ydArhA40Ru4ooG56gGq9dkia",
        "contact": "081 343 3473",
        "clients": {
            "c_user3": {
                "name": "Cfirst3 Clast3",
                "contact": "083 343 3473",
                "cash": "30000",
                "portfolio": {
                    "AAPL": {
                        "name": "Apple",
                        "currentPrice": "141",
                        "amountBought": "0.61"
                    },
                    "MICRO": {
                        "name": "Microsoft",
                        "currentPrice": "141",
                        "amountBought": "0.61"
                    }
                }
            }
        }
    }
}

const C_userCreds_data = {
    "$2b$05$WeIkpl2V61Vpn5edUh0l/u/164nNUPgYXyLfou92Wu2bMdARumcXK": {
        "name": "$2b$05$L8CKRQwvfL/uvfpfBLjMSeRIm8dX4nTebVqKnRq6XeRESZfTIQzKW",
        "contact": "$2b$05$Iq6iXMsUg7fdGor3Qdj8kuC6ZtPrGOneG0X0OU4RuMBJsF./kzTkG",
        "cash": "500",
        "portfolio": {
            "AAPL": {
                "name": "Apple",
                "currentPrice": "141",
                "amountBought": "0.61"
            },
            "MICRO": {
                "name": "Microsoft",
                "currentPrice": "141",
                "amountBought": "0.61"
            }
        }
    },
    "$2b$05$NCNwCNhptyU2/B.pjFgWp.IDs0B3pkGVTemXa0j2YyjddJgsD.FlO": {
        "name": "$2b$05$wYcqq2kDNgrGyhkCsKyeueOJVV/T7/Ba8.gsozU.D8GVVuf7euwES",
        "contact": "$2b$05$mew/ra0sc6yXEKbc/VVKNeMXXY254JAkmjX7pQVCgxjvLExfx6eiC",
        "cash": "26000",
        "portfolio": {
            "AAPL": {
                "name": "Apple",
                "currentPrice": "141",
                "amountBought": "0.61"
            },
            "MICRO": {
                "name": "Microsoft",
                "currentPrice": "141",
                "amountBought": "0.61"
            }
        }
    },
    "$2b$05$./62Q9wCcYt3uK8BfNAeI.36VPzrv.ad8qtCC5dxUKkG9tX0RPfwS": {
        "name": "$2b$05$T87DOlL1N2bhSB1das2g8uCVj8zgW3QlQLF79e7rrBLCf1RoxQGxu",
        "managerID": "M_$2b$05$sQeu1bLhsrAiiAYkl3Xsy.lnopTsyeGIF696/vPUjSrgapdsFUeOe",
        "contact": "$2b$05$Ee.OZWAlgyaqBubdkH9e0eOi0KLhll2pM9RSEAzrIftugCxjL1qu.",
        "cash": "30000",
        "portfolio": {
            "AAPL": {
                "name": "Apple",
                "currentPrice": "141",
                "amountBought": "0.61"
            },
            "MICRO": {
                "name": "Microsoft",
                "currentPrice": "141",
                "amountBought": "0.61"
            }
        }
    }
}

const currentUser_data = {
    "admin": "",
    "manager": "",
    "client": ""
}

const storage = getStorage();
const A_userCreds = ref(storage, 'A_userCreds.json'); // admin
const M_userCreds = ref(storage, 'M_userCreds.json'); // manager
const C_userCreds = ref(storage, 'C_userCreds.json'); // client
const currentUser = ref(storage, 'currentUser.json');

uploadString(A_userCreds, JSON.stringify(A_userCreds_data), 'raw', { contentType: 'application/json' }).then(() => {
    console.log("Admin's database has been reset")
});

uploadString(M_userCreds, JSON.stringify(M_userCreds_data), 'raw', { contentType: 'application/json' }).then(() => {
    console.log("Manager's database has been reset")
});

uploadString(C_userCreds, JSON.stringify(C_userCreds_data), 'raw', { contentType: 'application/json' }).then(() => {
    console.log("Client's database has been reset")
});

uploadString(currentUser, JSON.stringify(currentUser_data), 'raw', { contentType: 'application/json' }).then(() => {
    console.log("currentUser's database has been reset")
});
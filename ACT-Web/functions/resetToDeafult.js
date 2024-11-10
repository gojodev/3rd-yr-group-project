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

const defaultData = {
    "$2b$05$PSz14z6GK/7MEhMblOi3buMpdzzOEXI25OydbwoV6zqTQnaJzKLem": {
        "name": "$2b$05$bOTsmereH90vfIqoojj/NuoQOMaVES5N9xCZHWjRXV6djuUfjIzrC",
        "email": "$2b$05$zznYv.7BQMLXHdgJELKaI.iBbuFjt1.5YiRyhhs3zI0nlUQq0kfAu",
        "password": "$2b$05$fZTmA6nLg87A4aAPimY.l.yZ1HTlZAcJSuyLYqOoRZDX3YterOIwu",
        "id": "M_$2b$05$eX5qSeIsfQZtAR2RAFxYiuK/owcXv.TNPQOE5s3v7PgKqziXCSxoy",
        "contact": "$2b$05$FXvMpdMABhxzrmmsOKaMnOyEUABb5R4MKk9qm3vDJnC7YT9.WBZO6",
        "clients": [
            {
                "$2b$05$WeIkpl2V61Vpn5edUh0l/u/164nNUPgYXyLfou92Wu2bMdARumcXK": {
                    "name": "$2b$05$L8CKRQwvfL/uvfpfBLjMSeRIm8dX4nTebVqKnRq6XeRESZfTIQzKW",
                    "id": "C_$2b$05$MRd8CuSOQCSsEwfdZTwEpektVY8rXTxYnnRWngUTYnCXamQinmX5O",
                    "managerID": "M_$2b$05$eX5qSeIsfQZtAR2RAFxYiuK/owcXv.TNPQOE5s3v7PgKqziXCSxoy",
                    "contact": "$2b$05$Iq6iXMsUg7fdGor3Qdj8kuC6ZtPrGOneG0X0OU4RuMBJsF./kzTkG"
                }
            }
        ]
    },
    "$2b$05$qmJ1lAeKwSFqRUsCC/u2tOIeO/EKa2YY256A4AHcCsassIF.Q7ddu": {
        "name": "$2b$05$993jK.MVswCDk3k3f3I4dua2RIpSCfAInwASI4BYan4suGOaWEo2G",
        "email": "$2b$05$Iy2oIDLPqbO94dlzb7t2bO8mz0Ph3pV8cXd/VvPHe/dAsE54/HJXO",
        "password": "$2b$05$LFkH0aT4rgLE9PRsJ.uFOeRAUhyGoRkdjLIRmQL91v5zBFvGQ7oCC",
        "id": "M_$2b$05$Yf64wGoRjk8zPFlDCefsiuHnAM3RI61J8VoDn.Y8Iro7cP2r5ZXC6",
        "contact": "$2b$05$.0QbW4U8YpzB8/nRGZoqcOIwpxhdDWW1gVnPNRulmnHmf54YOMexi",
        "clients": [
            {
                "$2b$05$NCNwCNhptyU2/B.pjFgWp.IDs0B3pkGVTemXa0j2YyjddJgsD.FlO": {
                    "name": "$2b$05$wYcqq2kDNgrGyhkCsKyeueOJVV/T7/Ba8.gsozU.D8GVVuf7euwES",
                    "id": "C_$2b$05$XTqp2OH0DQq012nh7DuKxuT5FEycX7DR.8JgWjffu1xmgmr1hXHwC",
                    "managerID": "M_$2b$05$Yf64wGoRjk8zPFlDCefsiuHnAM3RI61J8VoDn.Y8Iro7cP2r5ZXC6",
                    "contact": "$2b$05$mew/ra0sc6yXEKbc/VVKNeMXXY254JAkmjX7pQVCgxjvLExfx6eiC"
                }
            }
        ]
    },
    "m_us$2b$05$f5KL1hDqC76sFdU/jr22NOXjylRwyNc7PytdxbptrIxFnvCBg/UNier3": {
        "name": "$2b$05$SX1jmp1.VcEd9aGjbKodNOLGFMu2ufZ3Y0pJKrlO6NB9AmUHj803.",
        "email": "$2b$05$WHSVRjNJuNl0VNLmsG8mjeN3syPfeMy6lDMqarJMcxRkHfmkp/28O",
        "password": "$2b$05$KkF8icD1NzVGh4u4E1mF9OjHtmg3.ydArhA40Ru4ooG56gGq9dkia",
        "id": "M_$2b$05$sQeu1bLhsrAiiAYkl3Xsy.lnopTsyeGIF696/vPUjSrgapdsFUeOe",
        "contact": "$2b$05$6GqzdRBo4cRqD4G5BcQ4aOf6XxznYI8M.Qmkhk1r5YR7W5HJibDS.",
        "clients": [
            {
                "$2b$05$./62Q9wCcYt3uK8BfNAeI.36VPzrv.ad8qtCC5dxUKkG9tX0RPfwS": {
                    "name": "$2b$05$T87DOlL1N2bhSB1das2g8uCVj8zgW3QlQLF79e7rrBLCf1RoxQGxu",
                    "id": "C_$2b$05$jz8sTjt98BQ.Nph3D78qb.S2ib60CXVeOprsS/sY4J0oytBKt0kee",
                    "managerID": "M_$2b$05$sQeu1bLhsrAiiAYkl3Xsy.lnopTsyeGIF696/vPUjSrgapdsFUeOe",
                    "contact": "$2b$05$Ee.OZWAlgyaqBubdkH9e0eOi0KLhll2pM9RSEAzrIftugCxjL1qu."
                }
            }
        ]
    }
}

const storage = getStorage();
const M_userCreds = ref(storage, 'M_userCreds.json'); // manager

uploadString(M_userCreds, JSON.stringify(defaultData)).then(() => {
    console.log("Manager's database has been reset")
});



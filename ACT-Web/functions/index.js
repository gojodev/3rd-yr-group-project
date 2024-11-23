const { onRequest } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase/app");
const bcrypt = require('bcrypt');

const yahooFinance = require('yahoo-finance2').default;

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

const { getStorage, ref, getDownloadURL, uploadString } = require("firebase/storage");

const cors = require('cors');
const corsHandler = cors({
    origin: true,
    methods: ['DELETE', 'PUT', 'GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 3600, // Cache preflight response for 1 hour
});

async function getRef_json(refItem) {
    const url = await getDownloadURL(refItem);
    const response = await fetch(url, { mode: 'cors' });
    let data = await response.text();
    data = JSON.parse(data);
    return data;
}

// ! global
const storage = getStorage();
const A_userCreds = ref(storage, 'A_userCreds.json'); // admin
const M_userCreds = ref(storage, 'M_userCreds.json'); // manager
const C_userCreds = ref(storage, 'C_userCreds.json'); // client

const currentUser = ref(storage, 'currentUser.json'); // current user data from a login or sign up

async function loadInfo(data) {
    return await Promise.resolve(getRef_json(data));
}

// function genId(type, name, email) {
//     return `${type}_${bcrypt.hashSync(`${type}_${name}_${email}`, 5)}`
// }

function findUserProfile(db, client_username) {
    for (const key in db) {
        const valid_username = bcrypt.compareSync(client_username, key)
        if (valid_username) {
            return db[key]
        }
    }
}

function find_db_username(db, client_username) {
    for (const key in db) {
        let valid_username = bcrypt.compareSync(client_username, key)
        if (valid_username) {
            return key
        }
    }
}

function missingInfoWarning(arr) {
    let missingItems = [];
    for (var item in arr) {
        if (item == undefined) {
            missingItems.push(item)
        }
    }

    return missingItems
}

exports.showDB = onRequest({ 'region': 'europe-west2', timeoutSeconds: 30, memory: "1GiB"}, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            let db = await loadInfo(M_userCreds);
            res.json(db);

        }
        catch (error) {
            console.log('Couldnt access the database: ', error)
            return res.status(500).json({ error: "Interal server error" })
        }
    });
});


async function verify_Admin(username, name, email, password, operation, type) {
    corsHandler(async () => {
        try {
            const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/uesrOps', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    name,
                    email,
                    password,

                    operation,
                    type
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const userData = await response.json();
            return userData.verdict;
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    });
}

async function verify_Client(client_username, client_name, client_contact, operation, type) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/userOps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client_username,
                client_name,
                client_contact,

                operation,
                type
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

async function verify_Manager(username, email, name, password, operation, type) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/userOps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                email,
                name,
                password,

                operation,
                type
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        return userData.verdict;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

exports.userOps = onRequest({ 'region': 'europe-west2', timeoutSeconds: 30, memory: "1GiB"}, async (req, res) => {
    corsHandler(req, res, async () => {
        const operation = req.body.operation // create, read, modify, delete, verify (CRUDV)
        const type = req.body.type // client, manager, admin

        // ? all possible opeartions
        const addClients = operation == 'create' && type == 'client'
        const showClientDetails = operation == 'read' && type == 'client'
        const updateClientDetails = operation == 'modify' && type == 'client'
        const removeClients = operation == 'delete' && type == 'client'
        const verifyClient = operation == 'verify' && type == 'client'

        const verifyManager = operation == 'verify' && type == 'manager'
        const verifyAdmin = operation == 'verify' && type == 'admin'

        const addAdmin = operation == 'create' && type == 'admin'
        const addManager = operation == 'create' && type == 'manager'

        // todo
        const updatePortfollio = operation == 'modify' && type == 'client'

        try {
            // if (addClients) {
            //     const client_username = req.body.client_username
            //     const client_name = req.body.client_name
            //     const client_contact = req.body.client_contact
            //     const managers_username = req.body.managers_username;


            //     let isExistingUser = await verify_Client(client_username, client_name, client_contact).verdict

            //     if (isExistingUser) {
            //         return res.status(200).json({ verdict: `Client with username ${client_username} has been added` });
            //     }

            //     else {
            //         const max = 30000
            //         const min = 30
            //         const cash = Math.floor(Math.random() * (max - min + 1) + min);

            //         const newClient = {
            //             [client_username]: {
            //                 name: client_name,
            //                 contact: client_contact,
            //                 cash: cash,
            //                 managers_username: managers_username,
            //                 portfolio: []
            //             }
            //         }

            //         const C_db = await loadInfo(C_userCreds);
            //         Object.assign(C_db, newClient)

            //         uploadString(C_userCreds, JSON.stringify(C_db)).then(() => {
            //             return res.status(200).json({
            //                 verdict: `Client with username ${client_username} has been created`
            //             });
            //         });

            //         const M_db = await loadInfo(M_userCreds)

            //         M_db[find_db_username(M_db, managers_username)].clients.push(newClient)

            //         uploadString(M_userCreds, JSON.stringify(M_db)).then(() => {
            //             return res.status(200).json({
            //                 verdict: `Updated ${managers_username}'s client list with ${client_username}'s details`
            //             });
            //         });
            //     }
            // }
            // else if (showClientDetails) {
            //     const username = req.body.username;

            //     const C_db = await loadInfo(C_userCreds);
            //     const data = findUserProfile(C_db, username);

            //     if (data != undefined) {
            //         res.status(200).json({ data })
            //     }
            //     else {
            //         res.status(200).json({ error: `The User ${username} does not exist` })
            //     }
            // }
            // else if (updateClientDetails) {
            //     const client_username = req.body.client_username
            //     const updateData = req.body.updateData
            //     const managers_username = req.body.managers_username

            //     const clientData = [client_username, updateData, managers_username]
            //     const missingItems = missingInfoWarning(clientData);

            //     if (missingItems != []) {
            //         return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            //     }

            //     const C_db = await loadInfo(C_userCreds)
            //     let isClient = Object.keys(C_db).includes(find_db_username(C_db, client_username))

            //     const updatedProfile = {
            //         [client_username]: {
            //             name: bcrypt.hashSync(updateData.name, 5),
            //             contact: bcrypt.hashSync(updateData.contact, 5),
            //             cash: bcrypt.hashSync(updateData.cash, 5),
            //             portfolio: updateData.portfolio
            //         }
            //     }

            //     if (isClient) {
            //         C_db[find_db_username(C_db, client_username)] = updatedProfile

            //         uploadString(C_userCreds, JSON.stringify(C_db))

            //         const M_db = await loadInfo(M_userCreds);
            //         M_db[find_db_username(M_db, managers_username)].clients[find_db_username(C_db, client_username)] = updatedProfile
            //         uploadString(M_userCreds, JSON.stringify(M_db)).then(() => {
            //             return res.status(200).json({
            //                 verdict: `Updated ${client_username}`,
            //                 updatedProfile: updatedProfile
            //             });
            //         });
            //     }
            //     else {
            //         return res.status(200).json({
            //             error: `Double check what data you sent concerning ${client_username}`,
            //             updatedProfile: updatedProfile
            //         });
            //     }
            // }
            // else if (removeClients) {
            //     if (req.method != 'POST') {
            //         return res.status(405).json({ error: "Method not allowed" })
            //     }

            //     const client_username = req.body.client_username;
            //     const managers_username = req.body.managers_username;

            //     const C_db = await loadInfo(C_userCreds)

            //     delete C_db[find_db_username(C_db, client_username)]

            //     uploadString(C_userCreds, JSON.stringify(C_db)).then(() => {
            //         return res.status(200).json({
            //             verdict: `removed ${client_username}`
            //         });
            //     });

            //     const M_db = await loadInfo(M_userCreds)
            //     const index = M_db[find_db_username(M_db, managers_username)].clients.indexOf(find_db_username(C_db, client_username))
            //     M_db[find_db_username(M_db, managers_username)].clients.splice(index, 1)

            //     uploadString(M_userCreds, JSON.stringify(M_db)).then(() => {
            //         return res.status(200).json({
            //             verdict: `removed ${client_username}`
            //         });
            //     });
            // }
            // else if (verifyClient) {
            //     const client_username = req.body.username;
            //     const client_name = req.body.client_name;
            //     const client_contact = req.body.client_contact;

            //     const clientData = [client_username, client_name, client_contact]
            //     const missingItems = missingInfoWarning(clientData);

            //     if (missingItems != []) {
            //         return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            //     }

            //     const db = await loadInfo(C_userCreds)

            //     const userInfo = findUserProfile(db, client_username);
            //     if (userInfo != undefined) {
            //         const db_name = userInfo.name;
            //         const db_contact = userInfo.contact

            //         let clientData = [client_name, client_contact];
            //         let missingItems = missingInfoWarning(clientData);

            //         if (missingItems != []) {
            //             return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            //         }

            //         let correctName = bcrypt.compareSync(client_name, db_name);
            //         let correctContact = bcrypt.compareSync(client_contact, db_contact);

            //         let verdict = correctName && correctContact;

            //         return res.status(200).json({
            //             'verdict': verdict,
            //             'userInfo': userInfo
            //         });
            //     }

            //     else {
            //         return res.status(200).json({
            //             'verdict': false,
            //             'reason': `${client_username} does not exist`
            //         });
            //     }
            // }
            // else if (verifyManager) {
            //     const client_username = req.body.username;
            //     const client_email = req.body.email;
            //     const client_password = req.body.password;

            //     let clientData = [client_email, client_password];

            //     let missingItems = missingInfoWarning(clientData);

            //     if (missingItems != []) {
            //         return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            //     }

            //     const db = await loadInfo(M_userCreds)

            //     const managerInfo = findUserProfile(db, client_username);
            //     if (managerInfo != undefined) {
            //         const db_email = managerInfo.email;
            //         const db_password = managerInfo.password
            //         const correctEmail = bcrypt.compareSync(client_email, db_email);
            //         const correctPassword = bcrypt.compareSync(client_password, db_password);

            //         let verdict = correctEmail && correctPassword;

            //         return res.status(200).json({
            //             'verdict': verdict,
            //             'managerInfo': managerInfo,
            //         });
            //     }

            //     else {
            //         return res.status(200).json({
            //             'verdict': false,
            //             'reason': `${client_username} does not exist`
            //         });
            //     }
            // }
            // else if (verifyAdmin) {
            //     const name = req.body.name;
            //     const username = req.body.username;
            //     const email = req.body.email;
            //     const password = req.body.password;

            //     const clientData = [name, username, email, password]
            //     const missingItems = missingInfoWarning(clientData);

            //     if (missingItems != []) {
            //         return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            //     }


            //     const db = await loadInfo(A_userCreds)


            //     const userInfo = findUserProfile(db, username);
            //     if (userInfo != undefined) {
            //         const db_email = userInfo.email;
            //         const db_password = userInfo.password;
            //         const db_name = userInfo.name;

            //         let clientData = [email, password, username];
            //         let missingItems = missingInfoWarning(clientData);

            //         if (missingItems != []) {
            //             return res.status(200).json({ error: `${missingItems} is required in the JSON body` })
            //         }

            //         let correctEmail = bcrypt.compareSync(email, db_email);
            //         let correctPassword = bcrypt.compareSync(password, db_password);
            //         let correctName = bcrypt.compareSync(name, db_name);
            //         let verdict = correctEmail && correctPassword && correctName;

            //         return res.status(200).json({
            //             'verdict': verdict,
            //             'correctEmail': correctEmail,
            //             'correctPassword': correctPassword,
            //             'correctName': correctName
            //         });
            //     }

            //     else {
            //         return res.status(200).json({
            //             'verdict': false,
            //             'reason': `${username} does not exist`
            //         });
            //     }
            // }
            // else if (addAdmin) {
            //     if (req.method != 'POST') {
            //         return res.status(405).json({ error: "Method not allowed" })
            //     }

            //     const client_username = req.body.username;
            //     const client_email = req.body.email;
            //     const client_password = req.body.password;

            //     let isExistingUser = await verify_Admin(client_username, client_email, client_password)

            //     if (isExistingUser) {
            //         return res.status(200).json({ verdict: `Account with username ${client_username} already exists` });
            //     }

            //     else {
            //         const saltRounds = 10;
            //         const username_hash = bcrypt.hashSync(client_username, saltRounds)
            //         const email_hash = bcrypt.hashSync(client_email, saltRounds)
            //         const password_hash = bcrypt.hashSync(client_password, saltRounds)

            //         let newUser = {
            //             [username_hash]:
            //             {
            //                 email: email_hash,
            //                 password: password_hash
            //             }
            //         }

            //         const db = await loadInfo(A_userCreds);

            //         Object.assign(db, newUser)

            //         uploadString(A_userCreds, JSON.stringify(db)).then(() => {
            //             return res.status(200).json({
            //                 'verdict': `New user ${client_username} has been created`
            //             });
            //         });
            //     }
            // }
            if (addManager) {
                const client_username = req.body.username;
                const client_email = req.body.email;
                const client_name = req.body.name;
                const client_password = req.body.password;

                let isExistingUser = await verify_Manager(client_username, client_email, client_name, client_password)

                if (isExistingUser) {
                    return res.status(200).json({ verdict: `Account with username ${client_username} already exists` });
                }

                else {
                    const saltRounds = 5;
                    const username_hash = bcrypt.hashSync(client_username, saltRounds)
                    const email_hash = bcrypt.hashSync(client_email, saltRounds)
                    const password_hash = bcrypt.hashSync(client_password, saltRounds)
                    const name_hash = bcrypt.hashSync(client_name, saltRounds)

                    let newUser = {
                        [username_hash]:
                        {
                            name: name_hash,
                            email: email_hash,
                            password: password_hash
                        }
                    }

                    const db = await loadInfo(M_userCreds)

                    Object.assign(db, newUser)

                    uploadString(M_userCreds, JSON.stringify(db)).then(() => { // ? how long???
                        return res.status(200).json({
                            verdict: `New user ${client_username} has been created`,
                            newUser: newUser
                        });
                    });
                }
            }
        }
        catch (error) {
            console.log("Something went wrong (userOps): ", error)
            return res.status(500).json({ error: "Interal server error (userOps)" })
        }
    })
})

exports.addManager = onRequest({ region: 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        const client_username = req.body.username;
        const client_email = req.body.email;
        const client_name = req.body.name;
        const client_password = req.body.password;

        let isExistingUser = await verify_Manager(client_username, client_email, client_name, client_password)

        if (isExistingUser) {
            return res.status(200).json({ verdict: `Account with username ${client_username} already exists` });
        }

        else {
            const saltRounds = 5;
            const username_hash = bcrypt.hashSync(client_username, saltRounds)
            const email_hash = bcrypt.hashSync(client_email, saltRounds)
            const password_hash = bcrypt.hashSync(client_password, saltRounds)
            const name_hash = bcrypt.hashSync(client_name, saltRounds)

            let newUser = {
                [username_hash]:
                {
                    name: name_hash,
                    email: email_hash,
                    password: password_hash
                }
            }

            const db = await loadInfo(M_userCreds)
            console.log(db)
            // const db = {
            //     "$2b$05$PSz14z6GK/7MEhMblOi3buMpdzzOEXI25OydbwoV6zqTQnaJzKLem": {
            //         "name": "$2b$05$bOTsmereH90vfIqoojj/NuoQOMaVES5N9xCZHWjRXV6djuUfjIzrC",
            //         "email": "$2b$05$zznYv.7BQMLXHdgJELKaI.iBbuFjt1.5YiRyhhs3zI0nlUQq0kfAu",
            //         "password": "$2b$05$fZTmA6nLg87A4aAPimY.l.yZ1HTlZAcJSuyLYqOoRZDX3YterOIwu",
            //         "id": "M_$2b$05$eX5qSeIsfQZtAR2RAFxYiuK/owcXv.TNPQOE5s3v7PgKqziXCSxoy",
            //         "contact": "$2b$05$FXvMpdMABhxzrmmsOKaMnOyEUABb5R4MKk9qm3vDJnC7YT9.WBZO6",
            //         "clients": [
            //             {
            //                 "$2b$05$WeIkpl2V61Vpn5edUh0l/u/164nNUPgYXyLfou92Wu2bMdARumcXK": {
            //                     "name": "$2b$05$L8CKRQwvfL/uvfpfBLjMSeRIm8dX4nTebVqKnRq6XeRESZfTIQzKW",
            //                     "id": "C_$2b$05$MRd8CuSOQCSsEwfdZTwEpektVY8rXTxYnnRWngUTYnCXamQinmX5O",
            //                     "managerID": "M_$2b$05$eX5qSeIsfQZtAR2RAFxYiuK/owcXv.TNPQOE5s3v7PgKqziXCSxoy",
            //                     "contact": "$2b$05$Iq6iXMsUg7fdGor3Qdj8kuC6ZtPrGOneG0X0OU4RuMBJsF./kzTkG",
            //                     "cash": "500",
            //                     "portfolio": []
            //                 }
            //             }
            //         ]
            //     },
            //     "$2b$05$qmJ1lAeKwSFqRUsCC/u2tOIeO/EKa2YY256A4AHcCsassIF.Q7ddu": {
            //         "name": "$2b$05$993jK.MVswCDk3k3f3I4dua2RIpSCfAInwASI4BYan4suGOaWEo2G",
            //         "email": "$2b$05$Iy2oIDLPqbO94dlzb7t2bO8mz0Ph3pV8cXd/VvPHe/dAsE54/HJXO",
            //         "password": "$2b$05$LFkH0aT4rgLE9PRsJ.uFOeRAUhyGoRkdjLIRmQL91v5zBFvGQ7oCC",
            //         "id": "M_$2b$05$Yf64wGoRjk8zPFlDCefsiuHnAM3RI61J8VoDn.Y8Iro7cP2r5ZXC6",
            //         "contact": "$2b$05$.0QbW4U8YpzB8/nRGZoqcOIwpxhdDWW1gVnPNRulmnHmf54YOMexi",
            //         "clients": [
            //             {
            //                 "$2b$05$NCNwCNhptyU2/B.pjFgWp.IDs0B3pkGVTemXa0j2YyjddJgsD.FlO": {
            //                     "name": "$2b$05$wYcqq2kDNgrGyhkCsKyeueOJVV/T7/Ba8.gsozU.D8GVVuf7euwES",
            //                     "id": "C_$2b$05$XTqp2OH0DQq012nh7DuKxuT5FEycX7DR.8JgWjffu1xmgmr1hXHwC",
            //                     "managerID": "M_$2b$05$Yf64wGoRjk8zPFlDCefsiuHnAM3RI61J8VoDn.Y8Iro7cP2r5ZXC6",
            //                     "contact": "$2b$05$mew/ra0sc6yXEKbc/VVKNeMXXY254JAkmjX7pQVCgxjvLExfx6eiC",
            //                     "cash": "26000",
            //                     "portfolio": []
            //                 }
            //             }
            //         ]
            //     },
            //     "m_us$2b$05$f5KL1hDqC76sFdU/jr22NOXjylRwyNc7PytdxbptrIxFnvCBg/UNier3": {
            //         "name": "$2b$05$SX1jmp1.VcEd9aGjbKodNOLGFMu2ufZ3Y0pJKrlO6NB9AmUHj803.",
            //         "email": "$2b$05$WHSVRjNJuNl0VNLmsG8mjeN3syPfeMy6lDMqarJMcxRkHfmkp/28O",
            //         "password": "$2b$05$KkF8icD1NzVGh4u4E1mF9OjHtmg3.ydArhA40Ru4ooG56gGq9dkia",
            //         "id": "M_$2b$05$sQeu1bLhsrAiiAYkl3Xsy.lnopTsyeGIF696/vPUjSrgapdsFUeOe",
            //         "contact": "$2b$05$6GqzdRBo4cRqD4G5BcQ4aOf6XxznYI8M.Qmkhk1r5YR7W5HJibDS.",
            //         "clients": [
            //             {
            //                 "$2b$05$./62Q9wCcYt3uK8BfNAeI.36VPzrv.ad8qtCC5dxUKkG9tX0RPfwS": {
            //                     "name": "$2b$05$T87DOlL1N2bhSB1das2g8uCVj8zgW3QlQLF79e7rrBLCf1RoxQGxu",
            //                     "id": "C_$2b$05$jz8sTjt98BQ.Nph3D78qb.S2ib60CXVeOprsS/sY4J0oytBKt0kee",
            //                     "managerID": "M_$2b$05$sQeu1bLhsrAiiAYkl3Xsy.lnopTsyeGIF696/vPUjSrgapdsFUeOe",
            //                     "contact": "$2b$05$Ee.OZWAlgyaqBubdkH9e0eOi0KLhll2pM9RSEAzrIftugCxjL1qu.",
            //                     "cash": "30000",
            //                     "portfolio": []
            //                 }
            //             }
            //         ]
            //     }
            // }

            Object.assign(db, newUser)

            uploadString(M_userCreds, JSON.stringify(db)).then(() => { // ? how long???
                return res.status(200).json({
                    verdict: `New user ${client_username} has been created`,
                    newUser: newUser
                });
            });
        }
    })

})

const stockTickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "DELL", "AMD", "NVDA"];
const cryptoTickers = ["BTC-USD", "ETH-USD", "DOGE-USD"];

exports.scraper = onRequest({ region: 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            async function fetchData(tickers, isCrypto = false) {
                const data = {};

                for (const ticker of tickers) {
                    try {
                        const info = await yahooFinance.quoteSummary(ticker, { modules: ['price', 'summaryDetail', 'recommendationTrend', 'earningsTrend'] });
                        data[ticker] = {
                            name: info.price.shortName || "N/A",
                            currentPrice: info.price.regularMarketPrice || "N/A",
                            marketCap: info.price.marketCap || "N/A",
                            volume: info.price.regularMarketVolume || "N/A",
                        };

                        if (!isCrypto) {
                            data[ticker]["recommendations"] = info.recommendationTrend ? JSON.stringify(info.recommendationTrend.trend) : "N/A";
                        }
                    } catch (error) {
                        console.error(`Error fetching data for ${ticker}:`, error);
                        data[ticker] = { error: "Failed to retrieve data" };
                    }
                }
                return data;
            }

            const stocksData = await fetchData(stockTickers, false);
            const cryptosData = await fetchData(cryptoTickers, true);

            const allData = {
                stocks: stocksData,
                cryptos: cryptosData
            };

            const financialData = ref(storage, 'financialData.json'); // scraped data from market
            uploadString(financialData, JSON.stringify(allData)).then(() => {
                return res.status(200).json({
                    verdict: "Financial data saved to Firebase successfully"
                });
            });

            return res.status(200).json({ message: 'Financial data saved to Firebase successfully', data: allData });
        } catch (error) {
            console.error("Error saving financial data:", error);
            return res.status(500).json({ error: "Failed to save financial data" });
        }
    });
});

exports.history = onRequest({ region: 'europe-west2' }, async (req, res) => {
    corsHandler(req, res, async () => {

        const currentTime = Math.floor(new Date().getTime() / 1000)

        const allPeriods = {
            '1D': {
                period1: Math.floor(new Date(Date.now() - 24 * 60 * 60 * 1000).getTime() / 1000), // 1 day ago
                period2: currentTime,
                interval: '1m'
            },
            '1W': {
                period1: Math.floor(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).getTime() / 1000), // 1 week ago
                period2: currentTime,
                interval: '5m'
            },
            '1M': {
                period1: Math.floor(new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).getTime() / 1000), // 1 month ago
                period2: currentTime,
                interval: '15m'
            },
            '6M': {
                period1: Math.floor(new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000).getTime() / 1000), // 6 months ago
                period2: currentTime,
                interval: '1h'
            },
            '1Y': {
                period1: Math.floor(new Date(Date.now() - 365 * 24 * 60 * 60 * 1000).getTime() / 1000), // 1 year ago
                period2: currentTime,
                interval: '1d'
            }
        };

        var requestedPeriod = req.body.requestedPeriod;

        var period1;
        var period2;
        var interval;

        if (!requestedPeriod) {
            const unit = allPeriods['1D'];
            period1 = unit.period1
            period2 = unit.period2
            interval = unit.interval
            requestedPeriod = '1D'
        }
        else {
            const unit = allPeriods[requestedPeriod];
            period1 = unit.period1
            period2 = unit.period2
            interval = unit.interval
        }

        async function fetchHistoryData(tickers) {
            const historicalData = {};

            for (const ticker of tickers) {
                try {
                    const assetInfo = await yahooFinance.quoteSummary(ticker, { modules: ["price"] });
                    const assetName = assetInfo.price.shortName || "N/A";

                    const raw_data = await yahooFinance.chart(ticker, {
                        period1,
                        period2,
                        interval: interval
                    });

                    // ? is it possible to loop through raw_data once for the histData, min and max??
                    const histData = raw_data.quotes.map(entry => ({
                        Date: new Date(entry.date).toUTCString(),
                        currentPrice: assetInfo.price.regularMarketPrice || "N/A",
                        Open: entry.open,
                        Close: entry.close,
                        Volume: entry.volume
                    }));

                    // todo loop through this once to save time and simplify the conditions
                    const highest = raw_data.quotes.reduce((max, entry) => (entry.high !== undefined && entry.high > max.high ? entry : max), raw_data.quotes[0]);
                    const lowest = raw_data.quotes.reduce((min, entry) => (entry.low !== null && entry.low !== undefined && (min.low === null || entry.low < min.low) ? entry : min), { low: null });

                    historicalData[ticker] = {
                        name: assetName,
                        highestPriceOfDay: {
                            time: new Date(highest.date).toUTCString() || 'N/A',
                            price: highest.high || 0
                        },
                        lowestPriceOfDay: {
                            time: new Date(lowest.date).toUTCString() || 'N/A',
                            price: lowest.low || 0
                        },
                        history: histData
                    };

                } catch (error) {
                    console.error(`Error fetching data for ${ticker}:`, error.message);
                }
            }
            return historicalData;
        }

        try {
            const stocksData = await fetchHistoryData(stockTickers);
            const cryptosData = await fetchHistoryData(cryptoTickers);

            const allData = {
                stockTickers: stockTickers,
                cryptoTickers: cryptoTickers,
                stocks_history: stocksData,
                cryptos_history: cryptosData
            };

            const periodData = `${requestedPeriod}.json`
            const historicalData = ref(storage, periodData)

            uploadString(historicalData, JSON.stringify(allData)).then(() => {
                return res.status(200).json({
                    message: `${periodData} was saved to Firebase successfully`,
                    data: allData
                });
            });

        } catch (error) {
            console.error("Error fetching historical data:", error.message);
            return res.status(500).json({ error: "Failed to fetch historical data" });
        }
    });
});

exports.currentUser = onRequest({ 'region': 'europe-west2', timeoutSeconds: 30, memory: "1GiB"}, async (req, res) => {
    corsHandler(req, res, async () => {
        try {
            if (req.method == 'POST') {
                const data = req.body.data;

                if (!data) {
                    return res.status(200).json({ error: `Data is required in the JSON body` })
                }

                uploadString(currentUser, JSON.stringify(data)).then(() => {
                    return res.status(200).json({
                        verdict: 'Current User data has been uploaded',
                        data: data
                    });
                });
            }

            else if (req.method == 'GET') {
                const db = await loadInfo(currentUser)
                return res.status(200).json({ db })
            }

            else {
                return res.status(200).json({ error: "Method must be a GET or POST request" })
            }
        }

        catch (error) {
            console.log("Couldn't get current user info: ", error)
            return res.status(500).json({ error: "Interal server error" })
        }
    })
})

async function use_scraper() {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/scraper', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        return userData.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

async function use_history() {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/history', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

exports.priceAlert = onRequest({ 'region': 'europe-west2', timeoutSeconds: 30, memory: "1GiB"}, async (req, res) => {
    corsHandler(req, res, async () => {
        const scrapedHistory = await use_history();

        function actualChange(open, currentPrice) {
            return ((open / currentPrice) * 100) - 100
        }

        async function getAlertData(tickers, is_Stock) {
            var alertInfo = [];
            var requestedAsset;

            for (let i = 0; i < tickers.length; i++) {
                requestedAsset = tickers[i];

                const All_assetData = scrapedHistory.data

                var historyData;

                if (is_Stock) {
                    historyData = All_assetData.stocks_history[requestedAsset].history[0];
                }
                else {
                    historyData = All_assetData.cryptos_history[requestedAsset].history[0];
                }

                const currentPrice = historyData.currentPrice
                const open = historyData.Open

                const change = Math.round(actualChange(open, currentPrice) * 100) / 100;

                if (change > 0) {
                    alertInfo.push(`${requestedAsset} is up by ${change}%`)
                }
                else if (change < 0) {
                    alertInfo.push(`${requestedAsset} is down by ${change}%`)
                }

            }
            return alertInfo;
        }

        try {
            const stockAlerts = await getAlertData(stockTickers, true)
            const cryptoAlerts = await getAlertData(cryptoTickers, false)

            return res.status(200).json({
                stockAlerts: stockAlerts,
                cryptoAlerts: cryptoAlerts
            })
        }

        catch (error) {
            console.error('Error fetching alert data', error.message);
        }
    })
})

/* 
? to start the backend server run "firebase eumlators:start" in "functions" folder
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/userOps
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/showDB
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/aiGen
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/scraper
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/history
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/updateManagersDetails
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/currentUser
http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/priceAlert
*/
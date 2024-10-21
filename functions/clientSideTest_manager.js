async function verifyManager(username, name, email, password, contact, id, clientsList) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyManager', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                name: name,
                email: email,
                password: password,
                contact: contact,
                id: id,
                clientsList: clientsList
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


async function verifyManager_test() {
    let clientList = [
        {
            "$2b$05$WeIkpl2V61Vpn5edUh0l/u/164nNUPgYXyLfou92Wu2bMdARumcXK": {
                "name": "$2b$05$L8CKRQwvfL/uvfpfBLjMSeRIm8dX4nTebVqKnRq6XeRESZfTIQzKW",
                "id": "C_$2b$05$MRd8CuSOQCSsEwfdZTwEpektVY8rXTxYnnRWngUTYnCXamQinmX5O",
                "managerID": "M_$2b$05$eX5qSeIsfQZtAR2RAFxYiuK/owcXv.TNPQOE5s3v7PgKqziXCSxoy",
                "contact": "$2b$05$Iq6iXMsUg7fdGor3Qdj8kuC6ZtPrGOneG0X0OU4RuMBJsF./kzTkG"
            },
            "$2b$05$NCNwCNhptyU2/B.pjFgWp.IDs0B3pkGVTemXa0j2YyjddJgsD.FlO": {
                "name": "$2b$05$wYcqq2kDNgrGyhkCsKyeueOJVV/T7/Ba8.gsozU.D8GVVuf7euwES",
                "id": "C_$2b$05$XTqp2OH0DQq012nh7DuKxuT5FEycX7DR.8JgWjffu1xmgmr1hXHwC",
                "managerID": "M_$2b$05$Yf64wGoRjk8zPFlDCefsiuHnAM3RI61J8VoDn.Y8Iro7cP2r5ZXC6",
                "contact": "$2b$05$mew/ra0sc6yXEKbc/VVKNeMXXY254JAkmjX7pQVCgxjvLExfx6eiC"
            },
            "$2b$05$./62Q9wCcYt3uK8BfNAeI.36VPzrv.ad8qtCC5dxUKkG9tX0RPfwS": {
                "name": "$2b$05$T87DOlL1N2bhSB1das2g8uCVj8zgW3QlQLF79e7rrBLCf1RoxQGxu",
                "id": "C_$2b$05$jz8sTjt98BQ.Nph3D78qb.S2ib60CXVeOprsS/sY4J0oytBKt0kee",
                "managerID": "M_$2b$05$sQeu1bLhsrAiiAYkl3Xsy.lnopTsyeGIF696/vPUjSrgapdsFUeOe",
                "contact": "$2b$05$Ee.OZWAlgyaqBubdkH9e0eOi0KLhll2pM9RSEAzrIftugCxjL1qu."
            }
        }
    ];

    clientList = JSON.stringify(clientList)

    let verdict = await verifyManager('m_user1', 'Mfirst1 Mlast1', 'm_user1@gmail.com', 'm_user1_password!', '081 143 3473', 'M_$2b$05$eX5qSeIsfQZtAR2RAFxYiuK/owcXv.TNPQOE5s3v7PgKqziXCSxoy', clientList)
    console.log(verdict)
}

verifyManager_test()
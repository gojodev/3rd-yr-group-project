async function currentUser(data, username, email, name, password) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/currentUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data,
                username,
                email,
                name,
                password
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

async function currentUser_test() {
    const data = {
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
        }
    };
    let res = await currentUser(data, 'manager', 'm_user1', 'm_user1@gmail.com', 'Mfirst1 Mlast1', 'm_user1_password!')
    console.log(res)
}

currentUser_test()
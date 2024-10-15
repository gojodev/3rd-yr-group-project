async function verifyUser_client(username, email, password) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
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


async function verifyUser_test() {
    let verdict = await verifyUser_client('user4', 'user4@gmail.com', 'user4_password!')
    console.log(verdict)
}

verifyUser_test()


/*
Fund manager - manages clients
clients - cant make their own trades but can view the trades that the fund manager makes for them
fund admin - can make their own trades (like a client but with more power)
*/
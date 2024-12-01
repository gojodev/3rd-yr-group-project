async function backendTest(username, email, password, operation, type) {
    try {
        const response = await fetch('https://userops-ieevug7ulq-nw.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
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
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

async function clientSide_test() {await backendTest('user4', 'user4@gmail.com', 'user4_password4!', 'verify', 'manager')
    let res = 
    console.log(res)
}

clientSide_test()
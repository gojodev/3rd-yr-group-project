async function backendTest(username, email, name, password, operation, type) {
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
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}


async function clientSide_Test() {
    let verdict = await backendTest('user4', 'user4@gmail.com', 'first4 last4', 'user4_password!', 'create', 'admin')
    console.log(verdict)
}

clientSide_Test()
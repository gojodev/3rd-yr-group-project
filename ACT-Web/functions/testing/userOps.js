async function backendTest(client_username, client_name, client_contact, managersUsername, operation, type) {
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
                managersUsername,
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

async function clientSideTest() {
    let verdict = await backendTest('c_user4', 'Cfirst4 Clast4', '084 343 3473', 'm_user1', 'create', 'client')
    console.log(verdict)
}

clientSideTest()

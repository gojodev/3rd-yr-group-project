async function verify_Client(client_username, client_name, client_contact) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client_username,
                client_name,
                client_contact,


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
    const updateData = {
        "name": "Cfirst1 Clast1_____",
        "contact": "081 343 3473",
        "cash": "69.69",
        "portfolio": []
    }
    const verdict = await verify_Client('c_user1', updateData, 'm_user1', 'modify', 'client')
    console.log(verdict)
}

clientSideTest()
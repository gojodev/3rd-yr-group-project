async function verifyManager(name, email, password, contact, id, clients) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyManager', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                contact: contact,
                id: id,
                clients: clients
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


async function verifyAdmin_test() {
    const clients = [];
    let verdict = await verifyAdverifyManagermin('first1 last1', 'user1@gmail.com', 'user1_password!', '012-345-6789', '', clients)
    console.log(verdict)
}

verifyAdmin_test()
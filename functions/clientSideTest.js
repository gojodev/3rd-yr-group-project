async function verifyUser() {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/hashCreds', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'user1',
                email: "user1@gmail.com",
                password: "user1_password!"
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        console.log('User Credentials:', userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}



verifyUser()
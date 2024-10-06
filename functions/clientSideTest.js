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

        const userData = await response.json(); // todo hash the password (use npm's bcyrpt)
        console.log('User Credentials:', userData);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}



verifyUser()

/*
? NOTES: new hashes are being created each time so old reords of hashs dont matter
you have to find a way for hashes to always be the sae when given the proper seed
*/
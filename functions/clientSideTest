async function verifyUser() {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'user2', // Replace 'user2' with the desired username variable
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json(); // todo hash the password (use npm's bcyrpt)
        console.log('User Credentials:', userData); // Log the user data returned from the server
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}



verifyUser()

// ! SUCCESS
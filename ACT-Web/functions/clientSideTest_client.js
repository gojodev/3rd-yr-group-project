async function verifyClient(username, name, id, managerID, contact) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/verifyClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                name: name,
                id: id,
                managerID: managerID,
                contact: contact
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


async function verifyClient_test() {
    let verdict = await verifyClient('c_user1', 'Cfirst1 Clast1', 'C_$2b$05$MRd8CuSOQCSsEwfdZTwEpektVY8rXTxYnnRWngUTYnCXamQinmX5O', 'M_$2b$05$eX5qSeIsfQZtAR2RAFxYiuK/owcXv.TNPQOE5s3v7PgKqziXCSxoy', '081 343 3473')
    console.log(verdict)
}

verifyClient_test()
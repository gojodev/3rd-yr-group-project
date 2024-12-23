async function verifyAdmin(username, name, email, password, id) {
    try {
        const response = await fetch('https://userops-ieevug7ulq-nw.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                name: name,
                email: email,
                password: password,
                id: id
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
    let verdict = await verifyAdmin('user1', 'first1 last1', 'user1@gmail.com', 'user1_password!', 'A_$2b$05$JY0rzd48rF1LPV/0R.4Ds./ublblLDLJxwZLWomcOs0seqH1tCl5W')
    console.log(verdict)
}

verifyAdmin_test()
async function addManager(username, name, email, password) {
    try {
        const response = await fetch('https://verifymanager-ieevug7ulq-nw.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                name: name,
                email: email,
                password: password,
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

async function addManager_test() {
    let res = await addManager('m_user4', 'Mfirst4 Mlast4', 'm_user4@gmail.com', 'm_user4_password!')
    console.log(res)
}

addManager_test()
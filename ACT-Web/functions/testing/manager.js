async function verify_Manager(username, email, name, password, operation, type) {
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
        return userData.verdict;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

async function clientSide_test() {
    let res = await verify_Manager('m_jing', 'm_jing@gmail.com', 'jing hua ye', 'm_jing_password!', 'create', 'manager')
    console.log(res)
}

clientSide_test()
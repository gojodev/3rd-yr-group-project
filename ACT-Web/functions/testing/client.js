async function showClientDB(username, operation, type) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/userOps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
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

async function add_Asset(managers_username, clients_username, assetSymbol, assetName, currentPrice, amountBought) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/addAsset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                managers_username,
                clients_username,
                assetSymbol,
                assetName,
                currentPrice,
                amountBought
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

async function delete_Asset(managers_username, clients_username, assetSymbol) {
    try {
        const response = await fetch('http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/removeAsset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                managers_username,
                clients_username,
                assetSymbol,
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
    const verdict = await showClientDB('c_user1', 'read', 'client')
    // const verdict = await add_Asset('m_user1', 'c_user1', 'TESLA', "Tesla", '320', '1')
    // const verdict = await delete_Asset('m_user1', 'c_user1', 'TESLA')
    console.log(verdict)
}

clientSideTest()
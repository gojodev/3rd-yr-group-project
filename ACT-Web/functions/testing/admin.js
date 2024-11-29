async function add_Asset(managers_username, clients_username, assetSymbol, assetName, currentPrice, amountBought, admins_username) {
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
                amountBought,
                admins_username
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

async function delete_Asset(managers_username, clients_username, assetSymbol, admins_username) {
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
                admins_username
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


async function clientSide_Test() {
    // const verdict = await add_Asset(null, null, 'TESLA', "Tesla", '320', '1', 'user1')
    const verdict = await delete_Asset(null, null, 'TESLA', 'user1')
    console.log(verdict)
}

clientSide_Test()
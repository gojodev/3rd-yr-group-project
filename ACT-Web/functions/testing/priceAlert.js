async function priceAlert(requestedAsset) {
    try {
        const response = await fetch('https://pricealert-ieevug7ulq-nw.a.run.app/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                requestedAsset: requestedAsset,
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
    let res = await priceAlert('AAPL')
    console.log(res)
}

clientSideTest()
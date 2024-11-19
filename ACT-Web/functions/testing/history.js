async function backendTest(requestedPeriod) {
    try {
        const response = await fetch('https://history-ieevug7ulq-nw.a.run.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                requestedPeriod
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
    let verdict = await backendTest('1W')
    console.log(verdict)
}

clientSideTest()
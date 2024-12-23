async function use_history() {
    try {
        const response = await fetch('https://history-ieevug7ulq-nw.a.run.app', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const userData = await response.json();
        return userData.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}


async function test() {
    const assetSymbol = "BTC-USD"
    const history = await use_history();
    const arr = history.cryptos_history[assetSymbol].history.length
    console.log(history.cryptos_history[assetSymbol].history[arr - 1].currentPrice)
}

test()
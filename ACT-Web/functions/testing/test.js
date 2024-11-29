const data = {
    "AAPL": {
        "name": "Apple",
        "currentPrice": "141",
        "amountBought": "0.61"
    },
    "MICRO": {
        "name": "Apple",
        "currentPrice": "141",
        "amountBought": "0.61"
    }
}

function getAssetIndex(data, search) {
    const symbols = Object.keys(data)
    for (let i = 0; i < symbols.length; i++) {
        if (search == symbols[i]) {
            return i
        }
    }
    return -1
}

const resultIndex = getAssetIndex(data, "MICRO");
console.log(resultIndex);
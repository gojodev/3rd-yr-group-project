const yahooFinance = require('yahoo-finance2').default;

const stockTickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "DELL", "AMD", "NVDA"];
const cryptoTickers = ["BTC-USD", "ETH-USD", "DOGE-USD"];

// Calculate period1 (start time) as one year ago and period2 (end time) as now
const period2 = Math.floor(new Date().getTime() / 1000); // Current time in Unix timestamp
const period1 = Math.floor(new Date(new Date().setFullYear(new Date().getFullYear() - 1)).getTime() / 1000); // 1 year ago

// Function to fetch historical data for a set of tickers
async function fetchHistoryData(tickers) {
    const historicalData = {};

    for (const ticker of tickers) {
        try {
            const assetInfo = await yahooFinance.quoteSummary(ticker, { modules: ["price"] });
            const assetName = assetInfo.price.shortName || "N/A";

            // Fetch historical OHLCV data using `chart`
            const raw_data = await yahooFinance.chart(ticker, {
                period1,
                period2,
                interval: "1d"
            });

            // Format each entry as specified
            const histData = raw_data.quotes.map(entry => ({
                Date: new Date(entry.date).toUTCString(),
                Open: entry.open,
                High: entry.high,
                Low: entry.low,
                Close: entry.close,
                Volume: entry.volume
            }));

            historicalData[ticker] = {
                name: assetName,
                history: histData
            };

        } catch (error) {
            console.error(`Error fetching data for ${ticker}:`, error.message);
        }
    }

    return historicalData;
}

async function test() {
    // Fetch data for stocks and cryptocurrencies
    const stocksData = await fetchHistoryData(stockTickers);
    const cryptosData = await fetchHistoryData(cryptoTickers);

    // Combine results
    const allData = {
        stocks_history: stocksData,
        cryptos_history: cryptosData
    };

    console.log(allData);
}

test();

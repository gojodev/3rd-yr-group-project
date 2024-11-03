import yfinance as yf
import json

# todo use "long-polling"

# (Yahoo Finance format)
stock_tickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "DELL", "AMD", "NVDA"]
crypto_tickers = ["BTC-USD", "ETH-USD", "DOGE-USD"]

def fetch_data(tickers, is_crypto=False):
    data = {}
    for ticker in tickers:
        asset = yf.Ticker(ticker)
        info = asset.info
        data[ticker] = {
            "name": info.get("shortName", "N/A"),
            "currentPrice": info.get("currentPrice", "N/A"),
            "marketCap": info.get("marketCap", "N/A"),
            "volume": info.get("volume", "N/A"),
            "52WeekHigh": info.get("fiftyTwoWeekHigh", "N/A"),
            "52WeekLow": info.get("fiftyTwoWeekLow", "N/A"),
        }
        
        if not is_crypto:
            data[ticker]["eps_trend"] = asset.eps_trend.to_json(orient="index") if asset.eps_trend is not None else "N/A"
            data[ticker]["recommendations"] = asset.recommendations.to_json(orient="index") if asset.recommendations is not None else "N/A"

    return data

stocks_data = fetch_data(stock_tickers, is_crypto=False)
cryptos_data = fetch_data(crypto_tickers, is_crypto=True)

all_data = {
    "stocks": stocks_data,
    "cryptos": cryptos_data
}

json_data = json.dumps(all_data, indent=4)
with open("financial_data.json", "w") as f:
    f.write(json_data)

print("Financial data saved to financial_data.json")
import yfinance as yf
import json

# todo use "long-polling"

# (Yahoo Finance format)
stock_tickers = ["AAPL", "MSFT", "GOOGL", "AMZN",
                 "TSLA", "NVDA", "META", "DELL", "AMD", "NVDA"]
crypto_tickers = ["BTC-USD", "ETH-USD", "DOGE-USD"]


def fetch_data(tickers, isCrypto):
    main_data = {}

    for ticker in tickers:
        asset = yf.Ticker(ticker)

        info = asset.info
        main_data[ticker] = {
            "name": info.get("shortName", "N/A"),
            "currentPrice": info.get("currentPrice", "N/A"),
            "marketCap": info.get("marketCap", "N/A")
        }

        if isCrypto:
            main_data[ticker]["recommendations"] = asset.recommendations.to_json(
            ) if asset.recommendations is not None else "N/A"

    return main_data


stocks_data = fetch_data(stock_tickers, True)
cryptos_data = fetch_data(crypto_tickers, False)

main_data = {
    "stocks": stocks_data,
    "cryptos": cryptos_data
}

main_data = json.dumps(main_data, indent=4)
with open("financial_data.json", "w") as f:
    f.write(main_data)

print("Financial data saved to financial_data.json")


def history_data(tickers, period):
    historical_data = {}

    for ticker in tickers:
        asset = yf.Ticker(ticker)
        info = asset.info


        raw_data = asset.history(period=period)

        ohlcv_data = raw_data[["Open", "High", "Low", "Close", "Volume"]]

        hist_data = [
            {
                "Date": item.strftime("%a, %d %b %Y %H:%M:%S GMT"),
                "Open": row["Open"],
                "High": row["High"],
                "Low": row["Low"],
                "Close": row["Close"],
                "Volume": int(row["Volume"])
            }
            for item, row in ohlcv_data.iterrows()  # Loop with tuple unpacking
        ]

        historical_data[ticker] = {
            "name": info.get("shortName", "N/A"),
            "history": hist_data
        }

    return historical_data



period = "1y"
stocks_data = history_data(stock_tickers, period)
cryptos_data = history_data(crypto_tickers, period)


all_data = {
    "stocks_history": stocks_data,
    "cryptos_history": cryptos_data
}

all_data_json = json.dumps(all_data, indent=4)
with open("history.json", "w") as f:
    f.write(all_data_json)

print("History data saved to history.json")

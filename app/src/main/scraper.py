import yfinance as yf
import json
from flask import Flask, jsonify
import threading
import time
import os 

# todo use "long-polling"

# (Yahoo Finance format)
stock_tickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "TSLA", "NVDA", "META", "DELL", "AMD", "NVDA"]
crypto_tickers = ["BTC-USD", "ETH-USD", "DOGE-USD"]

data = {}

def fetch_data(tickers, is_crypto=False):
    global data

    for ticker in tickers:
        asset = yf.Ticker(ticker)
        info = asset.info
        data[ticker] = {
            "name": info.get("shortName", "N/A"),
            "currentPrice": info.get("currentPrice", 0),
            "marketCap": info.get("marketCap", 0),
            "volume": info.get("volume", 0),
            "52WeekHigh": info.get("fiftyTwoWeekHigh", 0),
            "52WeekLow": info.get("fiftyTwoWeekLow", 0),
        }
        
        if not is_crypto:
            data[ticker]["eps_trend"] = asset.eps_trend.to_json(orient="index") if asset.eps_trend is not None else "N/A"
            data[ticker]["recommendations"] = asset.recommendations.to_json(orient="index") if asset.recommendations is not None else "N/A"


# Read stored data if exists
if os.path.exists("financial_data.json"):
    with open("financial_data.json", "r") as f:
        data = json.load(f)

# stocks_data = fetch_data(stock_tickers, is_crypto=False)
# cryptos_data = fetch_data(crypto_tickers, is_crypto=True)

# all_data = {
#     "stocks": stocks_data,
#     "cryptos": cryptos_data
# }

# json_data = json.dumps(all_data, indent=4)
# with open("financial_data.json", "w") as f:
#     f.write(json_data)

def continuous_stock_fetch():
    while True:
        fetch_data(stock_tickers, is_crypto=False)
        fetch_data(crypto_tickers, is_crypto=True)

        with open("financial_data.json", "w") as f:
            f.write(json.dumps(data))

        time.sleep(60)


threading.Thread(target=continuous_stock_fetch).start()

app = Flask(__name__)

@app.route("/stocks")
def flask_stocks():
    return jsonify({"stocks": data})

app.run()

# print("Financial data saved to financial_data.json")

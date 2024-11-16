import yfinance as yf
import json

# (Yahoo Finance format)
stock_tickers = ["AAPL", "MSFT", "GOOGL", "AMZN",
                 "TSLA", "NVDA", "META", "JPM", "V", "UNH"]
crypto_tickers = ["BTC-USD", "ETH-USD", "DOGE-USD"]


def fetch_data(tickers):
    data = {}
    for ticker in tickers:
        stock = yf.Ticker(ticker)
        info = stock.info
        data[ticker] = {
            "name": info.get("shortName", "N/A"),
            "currentPrice": info.get("currentPrice", "N/A"),
            "marketCap": info.get("marketCap", "N/A"),
            "volume": info.get("volume", "N/A"),
            "52WeekHigh": info.get("fiftyTwoWeekHigh", "N/A"),
            "52WeekLow": info.get("fiftyTwoWeekLow", "N/A"),
            "dividendYield": info.get("dividendYield", "N/A") if "dividendYield" in info else None,
        }
    return data

stocks_data = fetch_data(stock_tickers)
cryptos_data = fetch_data(crypto_tickers)

all_data = {
    "stocks": stocks_data,
    "cryptos": cryptos_data
}

json_data = json.dumps(all_data, indent=4)
with open("financial_data.json", "w") as f:
    f.write(json_data)

print("Financial data saved to financial_data.json")


"""
to set up local LLM 'mistral':

ollama run mistral 
ollama create trader -f ./Modelfile.txt 
ollama run trader
"""
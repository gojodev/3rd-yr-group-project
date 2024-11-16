import yfinance as yf
import json

asset = yf.Ticker("BTC-USD")
historical_data = asset.history(period="2y")
ohlcv_data = historical_data[["Open", "High", "Low", "Close", "Volume"]]

hist_data = [
    {
        "Date": item.strftime("%a, %d %b %Y %H:%M:%S GMT"), 
        "Open": row["Open"],
        "High": row["High"],
        "Low": row["Low"],
        "Close": row["Close"],
        "Volume": int(row["Volume"])
    }
    
    # for loop with tuple unpacking
    for item , row in ohlcv_data.iterrows() 
]

json_output = json.dumps(hist_data, indent=4)

print(json_output)
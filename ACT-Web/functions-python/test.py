import yfinance as yf

asset = yf.Ticker('SPY')
data = asset.funds_data

print(data.bond_ratings)
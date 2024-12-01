import yfinance as yf
import json
from flask import Flask, jsonify, request
import threading
import time
import os
import stripe
import logging

logging.basicConfig(level=logging.DEBUG)

stripe.api_key = 'sk_test_51QREz2KfPDk2OBGMkAWy0IjVDplJQjLkD4g0p33I33gTp5TFNKD2yZZHe574If2MmVGOGgK2M0bU5VXAedIalnrn00R780v7hu'


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

@app.route('/payment-sheet', methods=['POST'])
def payment_sheet():
    # Use an existing Customer ID if this is a returning customer
    customer = stripe.Customer.create()
    ephemeralKey = stripe.EphemeralKey.create(
        customer=customer['id'],
        stripe_version='2024-11-20.acacia',
    )

    paymentIntent = stripe.PaymentIntent.create(
        amount=499,
        currency='eur',
        customer=customer['id'],
        # In the latest version of the API, specifying the `automatic_payment_methods` parameter
        # is optional because Stripe enables its functionality by default.
        automatic_payment_methods={
            'enabled': True,
        },
    )
    return jsonify(paymentIntent=paymentIntent.client_secret,
                   ephemeralKey=ephemeralKey.secret,
                   customer=customer.id,
                   publishableKey='pk_test_51QREz2KfPDk2OBGM374jk38CqaX3Dyp016T5g91TkOofYKVBKkeqhCqg39J4wQCyZMi7tKGBzREKdPkXHpBGxWv400NOv8Jk1A')




app.run()

# print("Financial data saved to financial_data.json")

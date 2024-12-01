from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/get_data')
def get_data():
    # Your data fetching logic
    # For example, use the fetch_data function you defined
    stocks_data = fetch_data(stock_tickers, is_crypto=False)
    cryptos_data = fetch_data(crypto_tickers, is_crypto=True)

    all_data = {
        "stocks": stocks_data,
        "cryptos": cryptos_data
    }

    return jsonify(all_data)

if __name__ == '__main__':
    app.run(debug=True)

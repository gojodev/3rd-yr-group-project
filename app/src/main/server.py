import json
from flask import Flask, jsonify, request
import threading
import time
import os
import stripe

stripe.api_key = 'sk_test_51QREz2KfPDk2OBGMkAWy0IjVDplJQjLkD4g0p33I33gTp5TFNKD2yZZHe574If2MmVGOGgK2M0bU5VXAedIalnrn00R780v7hu'
app = Flask(__name__)
@app.route('/payment-sheet', methods=['POST'])
def payment_sheet():
    # Use an existing Customer ID if this is a returning customer
    customer = stripe.Customer.create()
    ephemeralKey = stripe.EphemeralKey.create(
        customer=customer['id'],
        stripe_version='2024-11-20.acacia',
    )

    paymentIntent = stripe.PaymentIntent.create(
        payment_method_types=['card', 'paypal'],
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
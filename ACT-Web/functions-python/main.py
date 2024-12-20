# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

import firebase_admin
from firebase_functions import firestore_fn, https_fn
from firebase_admin import credentials, initialize_app, storage
import google.cloud.firestore

cred = credentials.Certificate("serviceAccountKey.json")
initialize_app(cred)

@https_fn.on_request()
def helloWorld(req, res):
    return https_fn.Response(f"Hello world")

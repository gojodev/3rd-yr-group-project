import firebase_admin
from firebase_functions import firestore_fn, https_fn
from firebase_admin import credentials, initialize_app, storage
import google.cloud.firestore

cred = credentials.Certificate("serviceAccountKey.json")
initialize_app(cred)

@https_fn.on_request(region='europe-west2')
def hello_world(request):
    return "hello world"

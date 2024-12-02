import requests

url = "https://history-ieevug7ulq-nw.a.run.app"

try:
    response = requests.get(url) 
    
    if response.status_code == 200:
        json_data = response.json()
        print("JSON Data Retrieved:")
        print(json_data)
    else:
        print(f"Failed to fetch data. Status code: {response.status_code}")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")

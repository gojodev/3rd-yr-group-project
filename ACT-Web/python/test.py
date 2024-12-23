import requests

url = "https://companyname-ieevug7ulq-nw.a.run.app"

try:
    response = requests.get(url)

    if response.status_code == 200:
        json_data = response.json()
        companyName = json_data['companyName'] 
        print(companyName)
    else:
        print(f"Failed to fetch data. Status code: {response.status_code}")
except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")

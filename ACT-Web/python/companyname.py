import requests

url = "http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/companyName"

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

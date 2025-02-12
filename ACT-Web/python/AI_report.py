import requests

def sendToDB(content):
    url = "http://127.0.0.1:5001/rd-year-project-1f41d/europe-west2/AI_report"

    # ! its important that your JSON object has the "data" key
    data = {"data": content}

    try:
        response = requests.post(url, json=data)

        if response.status_code == 200:
            print("Response received")
            # print(response.json())
        else:
            print(f"Failed to send data. Status code: {response.status_code}")
    except requests.exceptions.RequestException as e:
        print(f"An error occurred: {e}")


f = open("content.txt", "r")
content = f.read()
sendToDB(content)
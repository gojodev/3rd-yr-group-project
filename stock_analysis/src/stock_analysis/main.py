#!/usr/bin/env python
import os
import sys
import warnings
from textwrap import dedent
import requests
from stock_analysis.crew import StockAnalysis
import requests

url = "https://companyname-ieevug7ulq-nw.a.run.app"

companyName = 'L'

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

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

class StockAnalysisCrew:
    def __init__(self, company):
        self.company = company

    def execute(self):
        """
        Run the stock analysis crew with the specified company.
        """
        inputs = {'topic': self.company}  # Define inputs as a dictionary
        crew = StockAnalysis().crew()
        result = crew.kickoff(inputs=inputs)  # Pass inputs to the crew
        return result

def sendToDB(content, retries=3, delay=5):
    url = "https://ai-report-ieevug7ulq-nw.a.run.app"
    data = {"data": content}

    for attempt in range(retries):
        try:
            print("Request Payload:", data)  # Debug the payload
            response = requests.post(url, json=data) 
            if response.status_code == 200:
                print("Response received successfully.")
                return
            else:
                print(f"Failed to send data. Status code: {response.status_code}")
                print(f"Response content: {response.text}")
        except requests.exceptions.RequestException as e:
            print(f"Attempt {attempt + 1} failed: {e}")

        time.sleep(delay)

    print("All retries failed. Could not send data.")

def run():
    """mm
    Entry point for the crew. Required by the `crewai` command.
    """
    print("## Welcome to Stock Analysis Crew")
    print('-------------------------------')

    company = companyName
    
    stock_crew = StockAnalysisCrew(company)
    try:
        result = stock_crew.execute()
        print("\n\n########################")
        print("## Here is the Report")
        print("########################\n")
        print(result)
    except Exception as e:
        print(f"An error occurred while running the crew: {e}")

    # Construct the correct path for report.txt
    file_path = os.path.abspath(
        os.path.join(os.path.dirname(__file__), "../../report.txt")
    )

    # Check if the file exists
    if not os.path.exists(file_path):
        print(f"Error: The file {file_path} does not exist.")
        return

    # Read the content of the file
    with open(file_path, "r") as f:
        content = f.read()

    # Validate content
    if not content.strip():
        print("Report content is empty. Nothing to send.")
        return

    # Send to the database
    sendToDB(content)

def main():
    run()


if __name__ == "__main__":
    main()

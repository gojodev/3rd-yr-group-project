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
        companyName = json_data['companyName'] \
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

def sendToDB(content, url, retries=3, delay=5):
    """
    Send the given content to a specific URL.
    
    Parameters:
    - content: The data to send (string).
    - url: The URL to send the data to.
    - retries: Number of retries for the URL.
    - delay: Delay between retries in seconds.
    """
    data = {"data": content}

    for attempt in range(retries):
        try:
            print(f"Sending data to {url}. Attempt {attempt + 1}/{retries}")
            print("Request Payload:", data)  # Debug the payload
            response = requests.post(url, json=data)
            if response.status_code == 200:
                print(f"Data sent successfully to {url}.")
                break
            else:
                print(f"Failed to send data to {url}. Status code: {response.status_code}")
                print(f"Response content: {response.text}")
        except requests.exceptions.RequestException as e:
            print(f"Attempt {attempt + 1} failed for {url}: {e}")
        
        # Wait before retrying
        if attempt < retries - 1:
            time.sleep(delay)
    else:
        print(f"All retries failed for {url}. Could not send data.")

# Updated `run` function
def run():
    """
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

    # Construct the correct paths
    file_paths = {
        "report": os.path.abspath(os.path.join(os.path.dirname(__file__), "../../report.txt")),
        "recommend": os.path.abspath(os.path.join(os.path.dirname(__file__), "../../recommendation.txt")),
        "blog": os.path.abspath(os.path.join(os.path.dirname(__file__), "../../blog.txt"))
    }

    # URLs corresponding to file contents
    urls = {
        "report": "https://ai-report-ieevug7ulq-nw.a.run.app",
        "recommend": "https://ai-reccomend-ieevug7ulq-nw.a.run.app",
        "blog": "https://ai-blog-ieevug7ulq-nw.a.run.app"
    }

    # Validate existence of files
    for file_type, path in file_paths.items():
        if not os.path.exists(path):
            print(f"Error: The file {path} does not exist.")
            return
    
    # Read and send contents of the files
    for file_type, path in file_paths.items():
        with open(path, "r") as f:
            content = f.read().strip()
            if not content:
                print(f"{file_type.capitalize()} content is empty. Nothing to send.")
                return
            
            # Send to said URL
            sendToDB(content, urls[file_type])


def main():
    run()


if __name__ == "__main__":
    main()

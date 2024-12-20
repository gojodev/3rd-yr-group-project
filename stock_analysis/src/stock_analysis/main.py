#!/usr/bin/env python
import sys
import warnings
from textwrap import dedent
from send_data import sendToDB

from stock_analysis.crew import StockAnalysis

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

def run():
    """
    Entry point for the crew. Required by the `crewai` command.
    """
    print("## Welcome to Stock Analysis Crew")
    print('-------------------------------')
    
    company = input(
        dedent("""\
            What company do you want to analyze? 
        """)
    )
    
    stock_crew = StockAnalysisCrew(company)
    try:
        result = stock_crew.execute()
        print("\n\n########################")
        print("## Here is the Report")
        print("########################\n")
        print(result)
    except Exception as e:
        print(f"An error occurred while running the crew: {e}")

# `main` function for local execution without `crewai`
def main():
    run()
    f = open("../report.txt", "r")
    content = f.read()
    sendToDB(content)


if __name__ == "__main__":
    main()
    
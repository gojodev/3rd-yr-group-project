from crewai import Agent, Task, Crew, Process
import os

os.environ["OPENAI_API_KEY"] = "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"

researcher = Agent(
    role="Research",
    goal="Find latest Stock and Crypto Information",
    backstory="You are an AI research assistant",
    verbose=True,
    allow_delegation=False
)

accountant = Agent(
    role="Accountant",
    goal="Calculate various accounting ratios",
    backstory="You are an AI accountant assistant",
    verbose=True,
    allow_delegation=False
)

recommender = Agent(
    role="Recommender",
    goal="Reccomon th user to either make a buy, sell or hold decision for Stocks and Cryptos",
    backstory="You are an AI accountant assistant",
    verbose=True,
    allow_delegation=False
)

blogger = Agent(
    role="Writer",
    goal="Write compelling and engaging blog posts about the latest Stocks and Cryptos news and insights format the output nicely",
    backstory="You are an AI blog post writer who specializes in writing about Stocks and Cryptos",
    verbose=True,
    allow_code_execution=False
)

task1 = Task(
    description="Investigate the latest Stocks and Crypto News",
    agent=researcher,
    expected_output="A report on the latest Stock and Crypto information."
)

task2 = Task(
    description="Write a compelling blog post based on the latest Stocks and Crypto news",
    agent=blogger,
    expected_output="A blog post about the latest Stock and Crypto trends."
)

crew = Crew(
    agents=[researcher, blogger],
    tasks=[task1, task2],
    verbose=True,
    process=Process.sequential
)

result = crew.kickoff()

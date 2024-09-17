from crewai import Agent, Task, Crew, Process
import os

# do not break key
os.environ['OPENAI_API_KEY'] = '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'

researcher = Agent(
    role= 'Researcher',
    goal='To Research a particular stock or crypto asset',
    backstory='You are an AI stock research assistant.',
    verbose=True,
    allow_delegation=False
)

accountant = Agent(
    role='Accountant',
    goal='To calculate various accounting ratios',
    backstory='You are an AI agentic corporate stock accountant',
    verbose=True,
    allow_delegation=False
)

recommender = Agent(
    role='Recommender',
    goal='To make a buy, sell and hold decision',
    backstory='You are an AI agentic corporate stock recommender. You recommend buy, sell, hold decisions based on buy, hold, sell signals',
    verbose=True,
    allow_delegation=False
)

blogger = Agent(
    role='Blogger',
    goal='To comment on and format the output neatly',
    backstory='You are an AI stock analysis blog poster and commenter.',
    verbose=True,
    allow_delegation=False
)

task1= Task(description='Investigate the high-moving stocks on the stock market')
task2 = Task(description='Comment on the best decisions to make when managing the stocks analysed')

crew= Crew(
    agents=[researcher, recommender, blogger],
    tasks=[task1, task2],
    verbose=2,
    process=Process.sequential
)
result = crew.kickoff()
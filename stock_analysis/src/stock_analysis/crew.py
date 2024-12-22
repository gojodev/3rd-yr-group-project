from crewai import Agent, Crew, Process, Task, LLM
from crewai.project import CrewBase, agent, crew, task
from crewai_tools import SerperDevTool

search_tool = SerperDevTool(
	n_results=5
)



@CrewBase
class StockAnalysis():
	"""StockAnalysis crew"""

	agents_config = 'config/agents.yaml'
	tasks_config = 'config/tasks.yaml'

	@agent
	def researcher(self) -> Agent:
		return Agent(
			config=self.agents_config['researcher'],
			 tools=[search_tool], 
			 verbose=True,
		)

	@agent
	def accountant(self) -> Agent:
		return Agent(
			config=self.agents_config['accountant'],
		    verbose=True,
			#llm = LLM(model="gemini/gemini-1.5-flash",api_key="AIzaSyBd3xPQsd-cswTe90BQG2tl9fZG0FZD8kQ")
			
		)
	
	@agent
	def recommender(self) -> Agent:
		return Agent(
			config=self.agents_config['recommender'],
			verbose=True,
			#llm=LLM(model="ollama/mistral:latest",base_url="http://localhost:11434")
			#llm = LLM(model="gemini/gemini-1.5-flash",api_key="AIzaSyAnSsm680P92G89Ca0r7eBI4rARfM7Urac")
		)
	
	@agent
	def blogger(self) -> Agent:
		return Agent(
			config=self.agents_config['blogger'],
			verbose=True,
			#llm=LLM(model="ollama/llama3.1:8b",base_url="http://localhost:11434")
			#llm = LLM(model="gemini/gemini-1.5-flash",api_key="AIzaSyAnSsm680P92G89Ca0r7eBI4rARfM7Urac")
		)

	@task
	def research_task(self) -> Task:
		return Task(
			config=self.tasks_config['research_task'],
		)

	@task
	def accounting_task(self) -> Task:
		return Task(
			config=self.tasks_config['accounting_task'],
			output_file='report.txt'
		)
	
	@task
	def recommending_task(self) -> Task:
		return Task(
			config=self.tasks_config['recommending_task'],
			output_file='recommendation.txt'
		)
	
	@task
	def blogging_task(self) -> Task:
		return Task(
			config=self.tasks_config['blogging_task'],
			output_file='blog.txt'
			
		)

	@crew
	def crew(self) -> Crew:
		"""Creates the StockAnalysis crew"""
		return Crew(
			agents=self.agents, # Automatically created by the @agent decorator
			tasks=self.tasks, # Automatically created by the @task decorator
			process=Process.sequential,
			verbose=True,
			# process=Process.hierarchical, # In case you wanna use that instead https://docs.crewai.com/how-to/Hierarchical/
		)

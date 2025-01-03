from crewai import Agent, Crew, Process, Task, LLM # type: ignore
from crewai.project import CrewBase, agent, crew, task # type: ignore
from crewai_tools import SerperDevTool # type: ignore

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
			 max_iter = 3
		)

	@agent
	def accountant(self) -> Agent:
		return Agent(
			config=self.agents_config['accountant'],
		    verbose=True,
			max_iter = 3,
			# llm = LLM(model="gemini/gemini-1.5-flash",
			# 		api_key="AIzaSyBd3xPQsd-cswTe90BQG2tl9fZG0FZD8kQ") 
		)
	
	@agent
	def recommender(self) -> Agent:
		return Agent(
			config=self.agents_config['recommender'],
			verbose=True,
			max_iter = 1,
			# llm=LLM(model="ollama/mistral:latest",
		   	# 		base_url="http://localhost:11434")
		)
	
	@agent
	def blogger(self) -> Agent:
		return Agent(
			config=self.agents_config['blogger'],
			verbose=True,
			max_iter = 3,
			# llm=LLM(model="ollama/llama3.1:8b",
			# 		base_url="http://localhost:11434")
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
			verbose=True
		)

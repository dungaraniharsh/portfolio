const INFO = {
	main: {
		title: "Portfolio",
		name: "Harsh Dungarani",
		email: "harshdungarani10@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/dungaraniharsh/",
		linkedin: "https://www.linkedin.com/in/harsh-dungarani/",
		instagram: "https://www.instagram.com/harsh__1310/"
	},

	homepage: {
		title: "Designing innovative code to meet challenging deadlines",
		description:
			"Hello! I am a twenty six year old Software Engineer with a background in Computer Science . My years of experience in research and engineering puts me in a pretty unique position to help identify critical insights about technical issues. I really believe that a good developer is not just someone who can code, but able to diagnose a given problem and produce quick and effective solutions for it.",
	},

	about: {
		title: "Hi nice to meet you!",
		description:
			"My name is Harsh Dungarani, and I have a passion for solving problems. Since coming to America, I have always had a dream to be a world-class developer. However, after being in the research field for 5 years, I realized that I needed a more fast paced environment. After transitioning into Computer Science at UPenn, I've been leveraging my unique experience in tackling complex research problems to excel in developing innovative solutions in the field of CS. As I continue on this path, I'm super excited to contribute my skills in projects that make meaningful impact and collaborate with like-minded people who share my views!",
		description2: 
			"Outside of work, I love learning new software tools. As a software engineer in the ever-growing tech world, I believe it is our responsibility to keep up with the cutting-edge technologies and adapt accordingly. I also enjoy teaching computer science on my free time. My specialty in teaching is in data structures and web development!"
		,
	},
	
	resume: {
		title: "Here is my resume!",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Enhancing Network Security through Optimized Classification Models",
			description:
				"In our research, we explored how different machine learning models can identify patterns in network traffic. We tested Random Forest, MLP, and Logistic Regression approaches using two important security datasets - UNSW-NB15 and CICIDS2017. Our paper walks through our entire process from selecting data to fine-tuning our models, offering practical insights for anyone working in network security",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			technologies:" #Python #NetworkSecurity #CyberSecurity #DataPreprocessing #AI #MLmodels #DataAnalytics",
			linkText: "View Paper",
			link: "https://scholarworks.calstate.edu/concern/theses/pn89df73b",
		},
		{
			title: "Ads Log Storage using DApp",
			description:
				"I led a team in developing a blockchain-based DApp using React.js and Ethereum to secure video streaming ad logs. We integrated IPFS and Solidity smart contracts to build a tamper-proof system, streamlining collaboration for advertisers and broadcasters. My role included overseeing technical architecture and ensuring seamless blockchain workflows",
			logo: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
			technologies:"#ReactJS #NodeJS #IPFS #AWS #DApp #Solidity #Truffle #Ganache #Metamask #Ethereum",
			linkText: "View Project",
			link: "https://github.com/dungaraniharsh/Ads-Log-Storage-using-DApp",
		},
		{
			title: "Pennstagram",
			description:
				"We provided an social media app for people at the University of Pennsylvania to express their thoughts and engage with their peers",
			logo: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
			technologies:"#React #JWT Tokens #Authentication #MongoDB #JavaScipt #HTML #CSS #AWS",
			linkText: "View Project",
			link: "https://github.com/Norrischen12",
		},
		{
			title: "Home Theater Facade",
			description: 
				"Designed and implemented the Facade Pattern in Java to simplify the control of a home theater system. This project integrates multiple components, including an amplifier, projector, screen, DVD player, tuner, and popcorn popper, into a unified interface. By encapsulating complex interactions, the system allows users to start and manage their home theater setup effortlessly with a single command.",
			logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/242px-Java_programming_language_logo.svg.png",
			technologies:"#Java #DesignPatterns #FacadePattern #OOP #SoftwareArchitecture",
			linkText: "View Project",
			link: "https://github.com/dungaraniharsh/Home-Theater-Facade",
		},
		{
			title: "Pipe Shell",
			description:
				"I built a mini UNIX Shell to perform automated low level system tasks with ease. This program can simplify complex workflows into a streamlined operation by integrating parallel programming with threads",
			logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/240px-ISO_C%2B%2B_Logo.svg.png",
			technologies:"#Linux/Unix #POSIX #Shell Scripting #Low Level System",
			linkText: "View Project",
			link: "https://github.com/Norrischen12/PipeShell.git",
		},
		{
			title: "Bioactivity Potency Predictor",
			description:
				"I developed a Bioactivity Potency Predictor using Multiple Linear Regression (MLR) with Genetic Algorithm (GA)-based feature selection. I implemented data preprocessing, model validation with R², Q² metrics, and Leave-One-Out Cross-Validation (LOOCV) to predict pIC50 values. I optimized the genetic algorithm and improved error handling to enhance accuracy and efficiency",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			technologies:"#Python #MachineLearning #LinearRegression #Bioinformatics #NumPy #ScikitLearn",
			linkText: "View Project",
			link: "https://github.com/dungaraniharsh/Bioactivity-Potency-Predictor",
		},

		{
			title: "Plagiarism Check",
			description:
				"Developed a plagiarism checker with Java due to the all the classes being online and students being able to copy off each other easier",
			logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/242px-Java_programming_language_logo.svg.png",
			technologies:"#Java #HashMap #N-Grams #TreeSet ",
			linkText: "View Project",
			link: "https://github.com/Norrischen12/PlagiarismCheck.git",
		},


	],
};

export default INFO;

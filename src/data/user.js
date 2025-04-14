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
			"Hello! I’m a Software Engineer with a background in Computer Science. My experience in both research and engineering gives me a unique ability to analyze complex technical challenges and uncover key insights. I believe that being a great developer goes beyond just writing code—it's about diagnosing problems effectively and delivering efficient, impactful solutions.",
	},

	about: {
		title: "Hi nice to meet you!",
		description:
			"I’m Harsh Dungarani, a passionate developer and designer who loves solving complex problems through technology. After starting my journey in research, I realized I thrived in fast-paced, hands-on development environments. This led me to transition into Computer Science at Cal State San Marcos, where I combined my analytical thinking with creativity to build scalable and user-friendly solutions. My experience spans full-stack development, cloud computing, and UI/UX design, allowing me to bridge the gap between functionality and great user experiences.",
		description2: 
			"I take pride in developing software that is not only efficient and secure but also intuitive and visually engaging. Whether it's designing sleek, user-friendly interfaces or building robust backend systems, I enjoy crafting seamless digital experiences. Beyond work, I’m always exploring new technologies and sharing knowledge—especially in web development and data structures—to help others grow in the field. I'm excited to collaborate with like-minded professionals who share a passion for innovation and impactful design.",
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
			title: "Real Estate DApp",
			description:
				"I built a Decentralized Application (DApp) to modernize the traditional real estate system by enabling secure, peer-to-peer property transactions using blockchain technology. The platform enhances transparency, eliminates intermediaries, and leverages AI to provide dynamic pricing insights and personalized recommendations. This solution not only improves efficiency but also contributes to a more sustainable and tech-forward real estate ecosystem.",
			logo: "https://img.icons8.com/?size=100&id=AU6Wc7r56Fxz&format=png&color=000000",
			technologies:"#NextJS #NodeJS #AI #ChatBot #Blockchain #SmartContracts #Ethereum #DApp #Web3",
			linkText: "View Project",
			link: "https://real-trado.vercel.app/",
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
			title: " Finance Manager",
			description:
				"I created a Finance Manager in Java that lets users add income and expenses, view their history, and track trends. It runs in the command line and saves all data in a text file. I made it easy to use for beginners and compatible with any Java IDE",
			logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/242px-Java_programming_language_logo.svg.png",
			technologies:"#Java #OOP #CLIApplications #FileHandling #JDK #TextFileStorage #FinancialTracking",
			linkText: "View Project",
			link: "https://github.com/dungaraniharsh/FinanceManager",
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
			title: "Banking System",
			description:
				"I worked with my team on a full-stack Java banking application as part of our Software Engineering course. The app allows users to manage transactions, apply for loans, and create cards. We used Maven, Hibernate, and JavaFX, and set it up to run smoothly with an SQLite databas",
			logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/242px-Java_programming_language_logo.svg.png",
			technologies:"#Java #Maven #Hibernate #JavaFX #SQLite #TeamCollaboration #DatabaseIntegration",
			linkText: "View Project",
			link: "https://github.com/dungaraniharsh/Banking-System",
		},


	],
};

export default INFO;

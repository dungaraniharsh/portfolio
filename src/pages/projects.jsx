import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);

		document.getElementById('projectsTitle').classList.add('fade');
		document.getElementById('projectsSubtitle').classList.add('fade');

		setTimeout(() => {
			document.querySelector('.projects-list').classList.add('fade');

		  }, 500);

	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title" id="projectsTitle">
							Things I’ve made trying to put my dent in the
							universe.
						</div>

						<div className="subtitle projects-subtitle" id="projectsSubtitle">
						Over the years, I’ve worked on a variety of research and development projects, many of which are open-source and available for others to explore. From machine learning models to software development, I enjoy building, optimizing, and solving complex problems. If you're interested, feel free to check out my work, suggest improvements, or collaborate. I believe research and innovation thrive on shared ideas, and I’m always open to feedback and new perspectives.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;

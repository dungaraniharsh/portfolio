import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";
import logo from "../homepage/logo.png";
import logo2 from "../homepage/logo2.png";
import logo3 from "../homepage/logo3.jpg";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={logo}
								alt="Wharton"
								className="work-image"
							/>
							<div className="work-title">Doodle Equity, LLC.</div>
							<div className="work-subtitle">
								SDE
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src={logo2}
								alt="work-logo"
								className="work-image"
							/>
							<div className="work-title">SFHAX INC</div>
							<div className="work-subtitle">
								Software Engineer 
							</div>
							<div className="work-duration">2022 - 2024</div>
						</div>

						<div className="work">
							<img
								src={logo3}
								alt="work-logo"
								className="work-image"
							/>
							<div className="work-title">Weapplinse Technology</div>
							<div className="work-subtitle">
								Full-stack Developer
							</div>
							<div className="work-duration">2019 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

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
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/1200px-UPenn_shield_with_banner.svg.png"
								alt="Wharton"
								className="work-image"
							/>
							<div className="work-title">Doodle Equity, LLC.</div>
							<div className="work-subtitle">
								IT Analyst
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/1200px-UPenn_shield_with_banner.svg.png"
								alt="work-logo"
								className="work-image"
							/>
							<div className="work-title">SFHAX INC</div>
							<div className="work-subtitle">
								Software Engineer 
							</div>
							<div className="work-duration">2023 - 2024</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C560BAQH8GW4h3Gl7jg/company-logo_200_200/0/1630611306156?e=2147483647&v=beta&t=XUUlgZPSjtgDCqzMbFkz7YBsCkwWZJ_YYTmP0b25ZTc"
								alt="work-logo"
								className="work-image"
							/>
							<div className="work-title">Weapplinse Technology</div>
							<div className="work-subtitle">
								Full-stack Developer
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

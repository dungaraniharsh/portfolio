import React from "react";
import './styles/experience.css';
import leaderLogo from '../homepage/logos/leadership-svg.svg';
import timeLogo from '../homepage/logos/time-management-watch-svg.svg';
import comLogo from '../homepage/logos/comlogo.svg';
import crossLogo from '../homepage/logos/crosslogo.svg';

const Experience = () => {
    return (
        <section className="experience-section" id = "about">
            <div className="container">
                <div className="section_title center">
                    <h1>Why Choose Me</h1>
                </div>
                <div className="experience-items">
                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="logo"></img>
                                <p>Python</p>
                            </div>
                            <div>
                                70%
                            </div>

                        </div>
                        <div className="progress-line" data-percent="70%">
                            <span style={{width: "70%"}}></span>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                            <img className="experience-logo" alt="logo" src={leaderLogo}></img>
                                <p>Leadership</p>
                            </div>
                            <div>
                                85%
                            </div>

                        </div>
                        <div className="progress-line-soft" data-percent="85%">
                            <span style={{width: "85%"}}></span>
                        </div>
                    </div>


                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src="https://cdn.worldvectorlogo.com/logos/react-1.svg"></img>
                                <p>Web Development (JavaScript/HTML/CSS)
                                </p>
                            </div>
                            <div>
                                85%
                            </div>

                        </div>
                        <div className="progress-line" data-percent="85%">
                            <span style={{width: "85%"}}></span>
                        </div>
                    </div>



                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src={timeLogo}></img>
                                <p>Time Management</p>
                            </div>
                            <div>
                                75%
                            </div>

                        </div>
                        <div className="progress-line-soft" data-percent="75%">
                            <span style={{width: "75%"}}></span>
                        </div>
                    </div>



                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src="https://1000logos.net/wp-content/uploads/2020/09/Java-Emblem.jpg"></img>
                                <p>Java</p>
                            </div>
                            <div>
                                75%
                            </div>

                        </div>
                        <div className="progress-line" data-percent="75%">
                            <span style={{width: "75%"}}></span>
                        </div>
                    </div>


                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src={comLogo}></img>
                                <p>Communication</p>
                            </div>
                            <div>
                                90%
                            </div>

                        </div>
                        <div className="progress-line-soft" data-percent="90%">
                            <span style={{width: "90%"}}></span>
                        </div>
                    </div>

                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"></img>
                                <p>C/C++</p>
                            </div>
                            <div>
                                80%
                            </div>

                        </div>
                        <div className="progress-line" data-percent="80%">
                            <span style={{width: "80%"}}></span>
                        </div>
                    </div>


                    <div className="experience-item">
                        <div className="experience-info">
                            <div className="experience-logo-name">
                                <img className="experience-logo" alt="logo" src={crossLogo}></img>
                                <p>Cross-Functional Collaboration</p>
                            </div>
                            <div>
                                85%
                            </div>

                        </div>
                        <div className="progress-line-soft" data-percent="85%">
                            <span style={{width: "85%"}}></span>
                        </div>
                    </div>

                    


                    
                </div>
            </div>
        </section>
    )
}  

export default Experience;
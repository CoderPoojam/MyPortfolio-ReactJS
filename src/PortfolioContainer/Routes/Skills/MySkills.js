import React from "react";
import ChildFooter from "../../Home/ChildFooter/ChildFooter";
import "./MySkills.css";

const MySkills = () => {
  return (
    <>
      <div className="skills-container">
        <div className="skills-list">
          <ol>
            <h2>Front-End Technologies </h2>
            <div className="row pt-2 ml-4">
              <div className="col-lg-2 col-md-6">
                <li className="item">
                  <div className="outer">
                    <div className="inner">
                      <div id="number">80%</div>
                    </div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="angular"
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                    />
                  </svg>

                  <span>Angular 13</span>
                </li>
              </div>

              <div className="col-lg-2 col-md-6">
                <li className="item">
                  <div className="outer">
                    <div className="inner">
                      <div id="number">70%</div>
                    </div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="javascript"
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                    />
                  </svg>

                  <span>JavaScript</span>
                </li>
              </div>

              <div className="col-lg-2 col-md-6">
                <li className="item">
                  <div className="outer">
                    <div className="inner">
                      <div id="number">90%</div>
                    </div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle className="html" cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>

                  <span>BootStrap/HTML</span>
                </li>
              </div>

              <div className="col-lg-2 col-md-6">
                <li className="item">
                  <div className="outer">
                    <div className="inner">
                      <div id="number">50%</div>
                    </div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="reactjs"
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span>ReactJS</span>
                </li>
              </div>
            </div>
          </ol>

          {/* Backend Technologies */}
          <ol style={{ marginTop: 70 }}>
            <h2>Back-End Technologies </h2>
            <div className="row pt-2 ml-4">
              <div className="col-lg-2 col-md-6">
                <li className="item">
                  <div className="outer">
                    <div className="inner">
                      <div id="number">75%</div>
                    </div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle className="aspmvc" cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>

                  <span>ASP.NET MVC</span>
                </li>
              </div>

              <div className="col-lg-2 col-md-6">
                <li className="item">
                  <div className="outer">
                    <div className="inner">
                      <div id="number">60%</div>
                    </div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle className="webapi" cx="80" cy="80" r="70" stroke-linecap="round" />
                  </svg>

                  <span>.NET WebAPI</span>
                </li>
              </div>

              <div className="col-lg-2 col-md-6">
                <li className="item">
                  <div className="outer">
                    <div className="inner">
                      <div id="number">50%</div>
                    </div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="160px"
                    height="160px"
                  >
                    <defs>
                      <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                      </linearGradient>
                    </defs>
                    <circle
                      className="nodejs"
                      cx="80"
                      cy="80"
                      r="70"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span>Node JS</span>
                </li>
              </div>
            </div>
          </ol>
        </div>
      </div>

      <ChildFooter />
    </>
  );
};

export default MySkills;

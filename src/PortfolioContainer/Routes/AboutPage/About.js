import React from "react";
import "./About.css";
import ChildFooter from "../../Home/ChildFooter/ChildFooter";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-title">
          <h1>About Me</h1>
        </div>

        <div className="row">
          <div className="col-md-5">
            {/* Profile */}
            <div className="profileImage">
              <div className="test"></div>
              <img
                src={require("../../../assets/Aboutme/ProfileImage.png")}
                alt="No Connection"
              ></img>
            </div>

            {/* end */}
          </div>

          <div className="col-md-6 how-img">
            <div className="profileinformation">
              <h4>
                Full stack web developer with background <br/> knowledge of <b>ASP.NET
                WebAPI</b> with <br/> <b>Angular/ReactJs</b> with a knack of building <br/>
                applications with utmost efficiency. <br/> Strong professional with <b>B.E. Computer <br/> Engineer</b> to be an asset for an organization.
              </h4>
              <br/>
              <h3>
               Some Few Highlights
              </h3>
              <ul>
                <li>Full Stack Web Development</li>
                <li>Interactive Front End Development</li>
                <li>Building REST API</li>
                <li>Managing Database</li>
               </ul>
            </div>
          </div>
        </div>
      </div>

      <ChildFooter />
    </>
  );
};

export default About;

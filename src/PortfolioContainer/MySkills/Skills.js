import React from "react";
import ChildFooter from "../Home/ChildFooter/ChildFooter";
import { useNavigate} from 'react-router-dom';

import "./Skills.css";
const Skills = () => {
  const navigate = useNavigate();
  function handleClick(event) {
    navigate('/');
  }
  return (
    <>
      <div className="skills-container">
        <div className="skills-title">
          <div className="row">
            <div className="col-md-12 d-flex">
            <button onClick={handleClick}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;
                Back
              </button>
            <h1>My Skills</h1>
            </div>
          </div>
        </div>

        <div className="skills-list">
          <ol>
            <li className="item">
              <h2>Front-End Technologies : </h2>
              <span>
                Angular 13, ReactJS, Redux, ReactNative, HTML, CSS, NPM,
                BootStrap, Angular Material
              </span>
            </li>

            <li className="item">
              <h2>Back-End Technologies : </h2>
              <span>NodeJS, ASP.NET, ASP.NET MVC, MS-SQL, WebAPI</span>
            </li>

            <li className="item">
              <h2>Languages : </h2>
              <span>JavaScript, TypeScript, C#, C++</span>
            </li>
          </ol>
        </div>
      </div>

      <ChildFooter />
    </>
  );
};

export default Skills;

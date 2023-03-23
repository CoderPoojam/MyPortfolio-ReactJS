import React from "react";
import Typical from "react-typical";
import './Profile.css';
import { useNavigate} from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  function handleClick(event) {
    navigate('/skills');
  }
  
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Pooja Mandule</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "FrontEnd Developer ",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Cross Platform",
                    1000,
                    "Angular/React Developer",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Passion of building applications with Front and Backend
                Operations.
              </span>
            </span>
          </div>

          {/* Resume download */}
          <div className="profile-options">
            <button className="btn primary-btn" onClick={handleClick}>My Skills </button>
            <a href="Pooja_Mandule_Resume.pdf" download="PoojaMandule.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

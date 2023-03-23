import React, { createContext, useState } from "react";
import "./MainNavbar.css";
import { Link } from "react-router-dom";

export const MyskillsContext = createContext();
const MainNavbar = () => {

  return (
    <div className="navbar-container">
      <div className="navbar-container-title">
        <Link to="/">
          <h1>My Portfolio</h1>
        </Link>
      </div>

      <div className="navbar-container-list">
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Project</Link>
          </li>
          <li>
            <Link to="/certificate">Certification</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNavbar;

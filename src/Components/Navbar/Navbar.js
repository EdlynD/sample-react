import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setLogin } = useContext(LoginContext);
  const [isActive, setActive] = useState(false);
  return (
    <div className={`navbar-container ${isActive && "active"}`}>
      <div className={`logo-container ${isActive && "active"} `}>
        <img
          className="logo-nvbar"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Open_Broadcaster_Software_Logo.png/2048px-Open_Broadcaster_Software_Logo.png"
        ></img>
      </div>
      <div
        onClick={() => setActive(!isActive)}
        className={`hamburger-container ${isActive && "active"}`}
      >
        <span className={`hamburger-1 ${isActive && "active"}`}></span>
        <span className={`hamburger-2 ${isActive && "active"}`}></span>
        <span className={`hamburger-3 ${isActive && "active"}`}></span>
      </div>
      <ul className={`ul-container ${isActive && "active"}`}>
        <Link to="/" className="navbar-list">
          Login
        </Link>
        <Link to="profile" className="navbar-list">
          Profile
        </Link>
        <Link to="about" className="navbar-list">
          About Us
        </Link>
        <Link to="documentation" className="navbar-list">
          Documentation
        </Link>
        <li className="navbar-list">
          <button
            onClick={() => setLogin(false)}
            className="button-navbar-logout"
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

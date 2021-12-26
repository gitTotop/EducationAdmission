import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../src/assets/images/logo.png";
import './style.css'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Programs">
                Programs
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/Admission"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Admission
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  صفحة 1
                </a>
                <a className="dropdown-item" href="#">
                  صفحة 2
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  صفحة 3
                </a>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Universities">
                Universities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">
              Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

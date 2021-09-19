import React from "react";
import "./css/home.css";
import { Link, NavLink } from "react-router-dom";
import logo from "./img/logo-ALTA@2x.png";

function Header() {
  return (
    <header>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 bg-white" >
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <img src={logo} alt="logo" className="logo" height="50px"  aria-label="Bootstrap"/>
        </Link>
        <ul className="nav col-6 justify-content-end mb-md-0">
          <li>
            <NavLink
              className="nav-link px-4 link-navy nav-active"
              to="/"
              exact
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link px-4 link-navy"
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav-link px-4 link-navy"
              to="/news"
            >
              EXPERIENCE
            </NavLink>
          </li>
          <li>
            <NavLink
              className= "nav-link px-4 link-navy"
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="columns is-centered jd-header">
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink className="navbar-item logo" to="/">
            JasminJoan
          </NavLink>
          <div
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <NavLink className="navbar-item navBarLink" to="/about">
              About
            </NavLink>
            <NavLink className="navbar-item navBarLink" to="/project">
              Project
            </NavLink>
            <NavLink className="navbar-item navBarLink" to="/contact">
              Contact
            </NavLink>
            <NavLink className="navbar-item navBarLink" to="/blog">
              Blog
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

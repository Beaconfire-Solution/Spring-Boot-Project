import React from "react";
import { Link, NavLink } from "react-router-dom";
import Summary from '../summary/summary';

const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
      <Link className="navbar-brand m-3" to="/">
        BeaconFire
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/summary">
            Summary
          </NavLink>
          <NavLink className="nav-item nav-link" to="/timesheet">
            Timesheet
          </NavLink>
          <NavLink className="nav-item nav-link" to="/profile">
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

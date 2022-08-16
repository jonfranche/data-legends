import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let activeClassName = "nav-item-active";
  let inActiveClassName = "nav-item";
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-list-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
          >
            Data Legends
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            to="/lol"
            className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
          >
            League of Legends
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            to="/tft"
            className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
          >
            TFT
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeClassName : inActiveClassName)}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

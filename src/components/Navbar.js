import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav-bar">
            
            <ul className="nav-list">
                <li className="title"><NavLink to="/">Data Legends</NavLink></li>
                <li className="nav-item"><NavLink to="/lol" >League of Legends</NavLink></li>
                <li className="nav-item"><NavLink to="/tft">TFT</NavLink></li>
                <li className="nav-item"><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;
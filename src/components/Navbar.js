import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav-bar">
            
            <ul className="nav-list">
                <li className="title"><a href="#home">Data Legends</a></li>
                <li className="nav-item"><a href="#league">League of Legends</a></li>
                <li className="nav-item"><a href="#tft">TFT</a></li>
                <li className="nav-item"><a href="#about">About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
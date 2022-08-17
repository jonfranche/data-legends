import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import SubNavBar from "./SubNavBar";
import Footer from "./Footer";

const TeamFightTactics = () => {
  return (
    <div className="home">
      <SubNavBar game="tft"/>
      <div className="welcome">
        <h2>Team Fight Tactics</h2>
        <p>View the <Link to="leaderboard">Leaderboards</Link> or Search for a Summoner:</p>
        <SearchBar game="tft"/>
      </div>
      <Footer />
    </div>
  );
};

export default TeamFightTactics;

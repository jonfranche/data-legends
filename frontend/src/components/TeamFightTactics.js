import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const TeamFightTactics = () => {
  return (
    <div className="home">
      <div className="welcome">
        <h2>Team Fight Tactics</h2>
        <p>View the <Link to="leaderboard">Leaderboards</Link> or Search for a Summoner:</p>
        <SearchBar game="tft"/>
      </div>
    </div>
  );
};

export default TeamFightTactics;

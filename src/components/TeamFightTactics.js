import React from "react";
import SearchBar from "./SearchBar";
import Leaderboard from "./Leaderboard";

const TeamFightTactics = () => {
  return (
    <div className="home">
      <div className="welcome">
        <h2>Search A Summoner's Profile: </h2>
      </div>
      <SearchBar />
      <Leaderboard />
    </div>
  );
};

export default TeamFightTactics;

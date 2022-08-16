import React from "react";
import "./RankedStats.css";

const RankedStats = (props) => {
  const stats = props.stats;

  return (
    <div className="ranked-stats-container">
      {stats && (
        <div>
          <p>
            Rank: {stats.tier} {stats.rank} Points: {stats.leaguePoints}
          </p>
          <p>
            Wins: {stats.wins} Losses: {stats.losses}
          </p>
        </div>
      )}
    </div>
  );
};

export default RankedStats;

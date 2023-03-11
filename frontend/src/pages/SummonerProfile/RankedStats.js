import React from "react";
import "./RankedStats.css";

const RankedStats = (props) => {
  const stats = props.stats;

  return (
    <div className="ranked-stats-container">
      {stats && (
        <div style={{ fontWeight: 700 }}>
          <h3 style={{ textDecoration: 'underline' }}>Solo/Duo Queue Ranked Stats</h3>
          <p>
            Rank: {stats.tier} {stats.rank} 
          </p>
          <p>
            Points: {stats.leaguePoints}
          </p>
          <p>
            Wins: <span style={{ color: "green" }}>{stats.wins}</span> Losses:{" "}
            <span style={{ color: "red" }}>{stats.losses}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default RankedStats;

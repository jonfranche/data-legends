import React, { useState } from "react";
import SelectedBoard from "./SelectedBoard";
import './Leaderboard.css'

const Leaderboard = () => {
  const regions = [
    { text: "--Choose a region--", value: "" },
    { text: "Brazil", value: "br1" },
    { text: "EU North & East", value: "eun1" },
    { text: "EU West", value: "euw1" },
    { text: "Japan", value: "jp1" },
    { text: "Korea", value: "kr" },
    { text: "Latin America North", value: "la1" },
    { text: "Latin America South", value: "la2" },
    { text: "North America", value: "na1" },
    { text: "Oceania", value: "oc1" },
    { text: "Russia", value: "ru" },
    { text: "Turkey", value: "tr1" },
  ];

  const [regionSelected, setRegionSelected] = useState(false);
  const [selected, setSelected] = useState(regions[0].value)

  const onRegionSelect = e => {
    setSelected(e.target.value);
    setRegionSelected(true);
  }

  return (
    <div className="leaderboard-container">
      <div className="leaderboard">
        <h2 className="leaderboard-title">Leaderboard</h2>
        <select className="leaderboard-dropdown"value={selected} onChange={onRegionSelect}>
          {regions.map((region) => (
            <option key={region.value} value={region.value}>
              {region.text}
            </option>
          ))}
        </select>
      </div>
      {regionSelected && <SelectedBoard region={selected}/>}
    </div>
  );
};

export default Leaderboard;

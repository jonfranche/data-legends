import "./SearchBar.css";
import Button from "./Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const regions = [
    { text: "North America", value: "na1" },
    { text: "Brazil", value: "br1" },
    { text: "EU North & East", value: "eun1" },
    { text: "EU West", value: "euw1" },
    { text: "Japan", value: "jp1" },
    { text: "Korea", value: "kr" },
    { text: "Latin America North", value: "la1" },
    { text: "Latin America South", value: "la2" },
    { text: "Oceania", value: "oc1" },
    { text: "Russia", value: "ru" },
    { text: "Turkey", value: "tr1" },
  ];

  const [region, setRegion] = useState(regions[0].value);
  const [summonerId, setSummonerId] = useState("");

  const onRegionSelect = (e) => {
    e.preventDefault();
    setRegion(e.target.value);
  };

  const setSummonerHandler = (e) => {
    e.preventDefault();
    setSummonerId(e.target.value);
  }

  return (
    <div className="search-bar">
      <form>
        <select value={region} onChange={onRegionSelect}>
          {regions.map((region) => (
            <option key={region.value} value={region.value}>
              {region.text}
            </option>
          ))}
        </select>
        <input
          className="search-input"
          type="text"
          placeholder="Enter Summoner Name"
          onChange={setSummonerHandler}
        ></input>
        <Link to={`/summoner/${region}/${summonerId}`} >Search</Link>
      </form>
    </div>
  );
};

export default SearchBar;

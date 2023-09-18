import "./SearchBar.css";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  game: "lol" | "tft";
}

const SearchBar = (props: SearchBarProps) => {
  const regions = [
    { text: "NA", value: "na1" },
    { text: "BR", value: "br1" },
    { text: "EUNE", value: "eun1" },
    { text: "EUW", value: "euw1" },
    { text: "JP", value: "jp1" },
    { text: "KR", value: "kr" },
    { text: "LAN", value: "la1" },
    { text: "LAS", value: "la2" },
    { text: "OCE", value: "oc1" },
    { text: "RU", value: "ru" },
    { text: "TR", value: "tr1" },
  ];

  const [region, setRegion] = useState(regions[0].value);
  const [summonerId, setSummonerId] = useState("");
  const navigate = useNavigate();

  const onRegionSelect = (e: SyntheticEvent) => {
    e.preventDefault();
    let target = e.target as HTMLInputElement;
    setRegion(target.value);
  };

  const setSummonerHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    let target = e.target as HTMLInputElement;
    setSummonerId(target.value);
  };

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    if (summonerId !== "") {
      navigate(`/${props.game}/summoner/${region}/${summonerId}`);
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={submitHandler}>
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
        <button type="submit" value="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

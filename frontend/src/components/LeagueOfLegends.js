import { Link } from "react-router-dom";
import "./Home.css";
import SearchBar from "./SearchBar";
const LeagueOfLegends = () => {
  return (
    <div className="home">
      <div className="welcome">
        <h2>League of Legends</h2>
        <p>View the <Link to="/lol/leaderboard">Leaderboards</Link> or Search for a Summoner:</p>
        <SearchBar />
      </div>
    </div>
  );
};

export default LeagueOfLegends;

import { Link } from "react-router-dom";
import "./Home.css";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import SubNavBar from "./SubNavBar";
const LeagueOfLegends = () => {
  return (
    <div className="home">
      <SubNavBar game="lol"/>
      <div className="welcome">
        <h2>League of Legends</h2>
        <p>View the <Link to="leaderboard">Leaderboards</Link> or Search for a Summoner:</p>
        <SearchBar game="lol"/>
      </div>
      <Footer />
    </div>
  );
};

export default LeagueOfLegends;

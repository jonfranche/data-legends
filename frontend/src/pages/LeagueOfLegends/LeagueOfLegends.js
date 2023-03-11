import { Link } from "react-router-dom";
import "../Home/Home.css";
import SearchBar from "../../shared/components/SearchBar/SearchBar";
import Footer from "../../shared/components/Footer";
import SubNavBar from "../../shared/components/Navigation/SubNavBar";
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

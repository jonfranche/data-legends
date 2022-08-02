import SearchBar from "./SearchBar";
import Leaderboard from "./Leaderboard";
import "./Home.css";
import LeagueSubNavbar from "./LeagueSubNavBar";
const LeagueOfLegends = () => {
  return (
    <div className="home">
        <LeagueSubNavbar />
      <div className="welcome">
        <h2>Search A Summoner's Profile: </h2>
      </div>
      <SearchBar />
      <Leaderboard />
    </div>
  );
};

export default LeagueOfLegends;

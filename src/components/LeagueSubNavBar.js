import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const LeagueSubNavbar = () => {
    // TODO: make Leaderboard to link to another page to view Leaderboard
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li className="title">
          <Link to="/">Leaderboard</Link>
        </li>
        <li className="nav-item">
          <SearchBar />
        </li>
      </ul>
    </nav>
  );
};

export default LeagueSubNavbar;

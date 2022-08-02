import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const LeagueSubNavbar = () => {
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

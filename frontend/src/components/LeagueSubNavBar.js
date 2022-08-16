import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./SubNavBar.css";
const LeagueSubNavbar = () => {
  return (
    <nav className="sub-nav-bar">
      <ul className="sub-nav-list">
        <li className="sub-nav-item">
          <NavLink to="/lol/leaderboard">Leaderboard</NavLink>
        </li>
        <li className="sub-nav-item">
          <SearchBar />
        </li>
      </ul>
    </nav>
  );
};

export default LeagueSubNavbar;

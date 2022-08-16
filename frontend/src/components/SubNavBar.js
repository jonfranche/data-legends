import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./SubNavBar.css";
const SubNavBar = (props) => {
  return (
    <nav className="sub-nav-bar">
      <ul className="sub-nav-list">
        <li className="sub-nav-item">
          {!props.leaderboardActive && (
            <NavLink to="leaderboard">Leaderboard</NavLink>
          )}
        </li>
        <li className="sub-nav-item">
          <SearchBar />
        </li>
      </ul>
    </nav>
  );
};

export default SubNavBar;

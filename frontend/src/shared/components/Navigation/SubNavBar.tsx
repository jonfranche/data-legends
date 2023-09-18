import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./SubNavBar.css";

interface SubNavBarProps {
  game: "lol" | "tft"
  leaderboardActive?: boolean;
}

const SubNavBar = (props: SubNavBarProps) => {
  const navlink = `/${props.game}/leaderboard`
  return (
    <nav className="sub-nav-bar">
      <ul className="sub-nav-list">
        <li className="sub-nav-item">
          <NavLink to={navlink}>Leaderboard</NavLink>
        </li>
        <li className="sub-nav-item">
          <SearchBar game={props.game}/>
        </li>
      </ul>
    </nav>
  );
};

export default SubNavBar;

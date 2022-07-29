import "./SearchBar.css";
import Button from "./Button";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <input className="search-input"type="text" placeholder="Enter Summoner Name"></input>
        <Button text={"Search"}/>
      </form>
    </div>
  );
};

export default SearchBar;

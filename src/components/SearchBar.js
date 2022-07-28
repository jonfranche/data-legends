import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <input className="search-input"type="text" placeholder="Enter Summoner Name"></input>
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

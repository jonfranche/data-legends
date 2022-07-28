import SearchBar from "./SearchBar";
import Leaderboard from "./Leaderboard";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="welcome">
        <h1>Welcome to Data Legends!</h1>
        <p>Search Summoner data or view the Challenger leaderboard</p>
      </div>
      <SearchBar />
      <Leaderboard />
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import Footer from "../../shared/components/Footer";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="welcome">
        <h1>Welcome to Data Legends!</h1>
        <p>
          Search Summoner data or view the Challenger leaderboard from either{" "}
          <Link to="/lol">League of Legends</Link> or <Link to="/tft">Team Fight Tactics</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

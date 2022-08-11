import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import NavBar from "./components/Navbar";
import LeagueOfLegends from "./components/LeagueOfLegends";
import TeamFightTactics from "./components/TeamFightTactics";
import About from "./components/About";
import Home from "./components/Home";
import SummonerProfile from "./components/SummonerProfile";
import Leaderboard from "./components/Leaderboard";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/lol" element={<LeagueOfLegends />}/>
            <Route path="/lol/leaderboard" element={<Leaderboard />} />
            <Route path="/lol/summoner/:region/:summonerName" element={<SummonerProfile/>}/>
          <Route path="/tft" element={<TeamFightTactics />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

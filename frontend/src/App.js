import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import NavBar from "./components/Navbar";
import LeagueOfLegends from "./components/LeagueOfLegends";
import TeamFightTactics from "./components/TeamFightTactics";
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
            <Route path="/lol/leaderboard" element={<Leaderboard game="lol"/>} />
            <Route path="/:game/summoner/:region/:summonerName" element={<SummonerProfile game="lol"/>}/>
          <Route path="/tft" element={<TeamFightTactics />} />
            <Route path="/tft/leaderboard" element={<Leaderboard game="tft"/>} />
            <Route path="/:game/summoner/:region/:summonerName" element={<SummonerProfile game="tft"/>}/>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

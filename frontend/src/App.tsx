import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css";
import NavBar from "./shared/components/Navigation/Navbar";
import LeagueOfLegends from "./pages/LeagueOfLegends/LeagueOfLegends";
import TeamFightTactics from "./pages/TeamFightTactics/TeamFightTactics";
import Home from "./pages/Home/Home";
import SummonerProfile from "./pages/SummonerProfile/SummonerProfile";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

const App = () => {
  return (
    <Router>
      <div id="app">
        <NavBar />
        <Routes>
          <Route path="/lol" element={<LeagueOfLegends />}/>
            <Route path="/lol/leaderboard" element={<Leaderboard game="lol"/>} />
            <Route path="/:game/summoner/:region/:summonerName" element={<SummonerProfile/>}/>
          <Route path="/tft" element={<TeamFightTactics />} />
            <Route path="/tft/leaderboard" element={<Leaderboard game="tft"/>} />
            <Route path="/:game/summoner/:region/:summonerName" element={<SummonerProfile/>}/>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

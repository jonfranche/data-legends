import React, { useState, useEffect } from "react";
import BoardItem from "./BoardItem";
import "./SelectedBoard.css";
const apiKey = require("../apiKeys.json").riot;

const SelectedBoard = (props) => {;
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const region = props.region;

  useEffect(() => {
    const getData = () => {
      return fetch(
        `https://${region}.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=${apiKey}`
      )
        .then((response) => {
          const respData = response.json();
          console.log(respData);
          return respData;
        })
        .then((response) => {
          setData(response);
          setIsPending(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    setData(null);
    setIsPending(true);
    setTimeout(() => {
      getData();
    }, 1000);
  }, [region]);

  return (
    <div className="board-container">
      <ul className="board-list">
        <li className="board-header">
          <span>Summoner Name</span>
          <span>League Points</span>
        </li>
        {isPending && <div className="loading">Loading...</div>}
        {data &&
          data.entries
            .sort((a, b) => (a.leaguePoints > b.leaguePoints ? -1 : 1))
            .map((entry) => (
              <BoardItem
                key={entry.summonerId}
                summonerName={entry.summonerName}
                points={entry.leaguePoints}
                wins={entry.wins}
                losses={entry.losses}
              />
            ))}
      </ul>
    </div>
  );
};

export default SelectedBoard;

import React, { useState, useEffect } from "react";
import BoardItem from "./BoardItem";
import "./SelectedBoard.css";

const SelectedBoard = (props) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const region = props.region;

  useEffect(() => {
    const getData = () => {
      if (region !== "") {
        return fetch(`/lol/leaderboard/${region}`)
          .then((response) => {
            const respData = response.json();
            return respData;
          })
          .then((response) => {
            setData(response);
            setIsPending(false);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };

    setData(null);
    setIsPending(true);
    setTimeout(() => {
      getData();
    }, 1000);
  }, [region]);

  return (
    <div className="board-container">
      {isPending && region !== "" && <div className="loading">Loading...</div>}
      <table className="board-table">
        <tbody>
          <tr className="board-header">
            <th>Rank</th>
            <th>Summoner Name</th>
            <th>League Points</th>
            <th>Wins</th>
            <th>Losses</th>
          </tr>
          {data &&
            data.entries
              .sort((a, b) => (a.leaguePoints > b.leaguePoints ? -1 : 1))
              .map((entry, index) => {
                return (
                  <BoardItem
                    key={entry.summonerId}
                    rank={index + 1}
                    summonerName={entry.summonerName}
                    points={entry.leaguePoints}
                    wins={entry.wins}
                    losses={entry.losses}
                  />
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedBoard;

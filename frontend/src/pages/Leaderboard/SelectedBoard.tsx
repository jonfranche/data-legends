import React, { useState, useEffect } from "react";
import BoardItem from "./BoardItem";
import "./SelectedBoard.css";

interface SelectedBoardProps {
  region: string;
  game: string;
}

interface Data {
  entries: Array<DataEntry>;
}

interface DataEntry {
  rank: number;
  summonerName: string;
  summonerId: string;
  leaguePoints: number;
  wins: number;
  losses: number;
}

const SelectedBoard = (props: SelectedBoardProps) => {
  const [data, setData] = useState<Data | null>(null);
  const [isPending, setIsPending] = useState(true);
  const region = props.region;

  useEffect(() => {
    const getData = () => {
      if (region !== "") {
        return fetch(`/api/${props.game}/leaderboard/${region}`)
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
  }, [props.game, region]);

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
              .map((entry, index: number) => {
                return (
                  <BoardItem
                    key={entry.summonerId}
                    rank={index++}
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

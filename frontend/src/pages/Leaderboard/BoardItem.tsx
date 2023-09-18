import React from "react";
import "./BoardItem.css";

interface BoardItemProps {
  rank: number;
  summonerName: string;
  points: number;
  wins: number;
  losses: number;
}

const BoardItem = (props: BoardItemProps) => {
  return (
    <tr className="board-item">
      <td>{props.rank}</td>
      <td>{props.summonerName}</td>
      <td>{props.points}</td>
      <td>{props.wins}</td>
      <td>{props.losses}</td>
    </tr>
  );
};

export default BoardItem;

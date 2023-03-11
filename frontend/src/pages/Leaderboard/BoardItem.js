import "./BoardItem.css";
const BoardItem = (props) => {
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

import "./BoardItem.css";
const BoardItem = (props) => {
  return (
    <li className="board-item">
      <span>{props.summonerName}</span>
      <span>{props.points}</span>
    </li>
  );
};

export default BoardItem;

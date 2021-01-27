import { useState } from "react";
import GameSquare from "./GameSquare";
import dummy from "../../images/pieces/104.png";

const GameBoard = () => {
  const [squares, setSquares] = useState([]);
  let tempSquares = [];

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let key = [i, j];
      tempSquares.push(<GameSquare imagePath={dummy} key={key} i={i} j={j} />);
    }
  }

  return <div className="game-board grid">{tempSquares}</div>;
};

export default GameBoard;

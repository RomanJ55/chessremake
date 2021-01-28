import { useState, useEffect } from "react";
import GameSquare from "./GameSquare";

const GameBoard = ({ board, rows, columns, playerName, getData }) => {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    setSquares(board);
  }, [board]);
  let tempSquares = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let key = [i, j];
      let type = -1;
      let imagePath = "/pieces/dummy.png";
      let colorNum = -1;
      let color;
      let selected;

      if (squares !== undefined && squares.length > 1) {
        if (squares[i][j]) {
          type = squares[i][j].type;
          selected = squares[i][j].selected;
          color = squares[i][j].player;
          colorNum = color === "white" ? 0 : 1;
          imagePath = "/pieces/" + colorNum + "0" + type + ".png";
          if (type === 5 && squares[i][j].incheck) {
            imagePath = "/pieces/" + colorNum + "0" + type + "c.png";
          }
        }
      }
      tempSquares.push(
        <GameSquare
          imagePath={imagePath}
          key={key}
          i={i}
          j={j}
          type={type}
          selected={selected}
          color={color}
          playerName={playerName}
          getData={getData}
        />
      );
    }
  }

  return <div className="game-board grid">{tempSquares}</div>;
};

export default GameBoard;

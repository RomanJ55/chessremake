import { useState, useEffect } from "react";
import GameInfo from "./GameInfo";
import GameFooter from "./GameFooter";
import GameBoard from "./GameBoard";
import GameEndModal from "./GameEndModal";

const Game = ({ playerName, gameRoom, gameTime, leaveHandler }) => {
  const [roomData, setRoomData] = useState([]);
  const [gameData, setGameData] = useState([]);

  const giveUpHandler = () => {};
  const playagainHandler = () => {};

  return (
    <div className="game">
      {false && (
        <GameEndModal
          winner="RomJ55"
          leaveHandler={leaveHandler}
          playagainHandler={playagainHandler}
        />
      )}
      <div className="container flex">
        <GameInfo
          playerName={playerName}
          gameRoom={gameRoom}
          gameTime={gameTime * 60}
          timeoutHandler={giveUpHandler}
        />

        <GameBoard />
        <GameFooter giveUpHandler={giveUpHandler} leaveHandler={leaveHandler} />
      </div>
    </div>
  );
};

export default Game;

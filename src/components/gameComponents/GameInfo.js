import { useState, useEffect } from "react";
import GameTimer from "./GameTimer";

const GameInfo = ({ gameRoom, roomInfo, turn, timeoutHandler }) => {
  const [whiteName, setWhiteName] = useState("");
  const [blackName, setBlackName] = useState("");
  const [gameTime, setGameTime] = useState();

  useEffect(() => {
    setWhiteName(roomInfo[0]);
    setBlackName(roomInfo[1]);
    setGameTime(roomInfo[3]);
  }, [roomInfo]);

  return (
    <div className="game-info flex">
      <div className="flex">
        <h4 className="text-light">
          White: {whiteName === "" ? "waiting..." : whiteName}
        </h4>
        {gameTime > 0 && (
          <GameTimer
            timer={gameTime}
            run={turn === "white" ? true : false}
            timeoutHandler={timeoutHandler}
          />
        )}
      </div>
      <h2 className="text-primary">Room: {gameRoom}</h2>
      <div className="flex">
        <h4 className="text-light">
          Black: {blackName === "" ? "waiting..." : blackName}
        </h4>
        {gameTime > 0 && (
          <GameTimer
            timer={gameTime}
            run={turn === "black" ? true : false}
            timeoutHandler={timeoutHandler}
          />
        )}
      </div>
    </div>
  );
};

export default GameInfo;

import { useState, useEffect } from "react";
import {
  endGame,
  restartGame,
  leaveGame,
  getGameData,
  getRoomData,
} from "../../socket";
import GameInfo from "./GameInfo";
import GameFooter from "./GameFooter";
import GameBoard from "./GameBoard";
import GameEndModal from "./GameEndModal";

const Game = ({ playerName, gameRoom, setIsInRoom }) => {
  const [roomInfo, setRoomInfo] = useState([]);
  const [gameData, setGameData] = useState([]);

  const getData = () => {
    const clientData = { room: gameRoom };
    getRoomData(clientData, (response) => {
      setRoomInfo(response);
    });
    getGameData(clientData, (response) => {
      setGameData(JSON.parse(response));
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const giveUpHandler = () => {
    endGame();
    getData();
  };

  const leaveHandler = () => {
    const clientData = { username: playerName, room: gameRoom };
    leaveGame(clientData);
    getData();
    setIsInRoom(false);
  };

  const playagainHandler = () => {
    restartGame();
    getData();
  };

  return (
    <div className="game">
      {gameData.is_winner && (
        <GameEndModal
          winner={gameData.winner}
          leaveHandler={leaveHandler}
          playagainHandler={playagainHandler}
        />
      )}
      <div className="container flex">
        <GameInfo
          roomInfo={roomInfo}
          turn={gameData.game_running ? gameData.turn : "waiting"}
          gameRoom={gameRoom}
          timeoutHandler={giveUpHandler}
        />

        <GameBoard
          board={gameData.board}
          rows={gameData.rows}
          columns={gameData.columns}
          getData={getData}
          playerName={playerName}
        />
        <GameFooter
          giveUpHandler={giveUpHandler}
          leaveHandler={leaveHandler}
          turn={gameData.game_running ? gameData.turn : "waiting"}
        />
      </div>
    </div>
  );
};

export default Game;

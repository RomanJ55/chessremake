import GameTimer from "./GameTimer";

const GameInfo = ({ gameRoom, playerName, gameTime, timeoutHandler }) => {
  return (
    <div className="game-info flex">
      <div className="flex">
        <h4 className="text-light">White: {playerName}</h4>
        {gameTime > 0 && (
          <GameTimer
            timer={gameTime}
            run={false}
            timeoutHandler={timeoutHandler}
          />
        )}
      </div>
      <h2 className="text-primary">Room: {gameRoom}</h2>
      <div className="flex">
        <h4 className="text-light">Black: {playerName}</h4>
        {gameTime > 0 && (
          <GameTimer
            timer={gameTime}
            run={false}
            timeoutHandler={timeoutHandler}
          />
        )}
      </div>
    </div>
  );
};

export default GameInfo;

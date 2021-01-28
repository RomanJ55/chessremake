import bWon from "../../images/b_won.png";
import wWon from "../../images/w_won.png";

const GameEndModal = ({
  winnerName,
  winnerColor,
  leaveHandler,
  playagainHandler,
}) => {
  return (
    <div className="end-game">
      <div className="modal flex">
        <img src={winnerColor === "white" ? wWon : bWon} alt="" />
        <h2 className="text-primary">{winnerName} Won!</h2>
        <div className="grid">
          <button className="btn" onClick={playagainHandler}>
            Play again
          </button>
          <button className="btn" onClick={leaveHandler}>
            Leave room
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameEndModal;

const GameFooter = ({ giveUpHandler, leaveHandler, turn }) => {
  return (
    <div className="game-footer flex">
      <button
        className="btn"
        onClick={giveUpHandler}
        disabled={turn === "waiting" ? true : false}
      >
        Give up
      </button>
      <h2 className="text-primary" id="turn-label">
        {turn === "waiting" ? "Game not running" : "Turn: " + turn}
      </h2>
      <button className="btn" onClick={leaveHandler}>
        Leave room
      </button>
    </div>
  );
};

export default GameFooter;

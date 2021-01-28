const GameFooter = ({ giveUpHandler, leaveHandler, turn }) => {
  return (
    <div className="game-footer flex">
      <button className="btn" onClick={giveUpHandler}>
        Give up
      </button>
      <h2 className="text-primary" id="turn-label">
        Turn: {turn}
      </h2>
      <button className="btn" onClick={leaveHandler}>
        Leave room
      </button>
    </div>
  );
};

export default GameFooter;

const GameSquare = ({ imagePath, i, j }) => {
  const clickHandler = () => {};
  return (
    <button
      className="square"
      style={{
        background: (j + i) % 2 ? "black" : "white",
        border: "1px solid rgb(136, 127, 127)",
      }}
      onClick={clickHandler}
    >
      <img src={imagePath} alt="0" />
    </button>
  );
};

export default GameSquare;

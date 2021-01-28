import { squareClickedHandler } from "../../socket";
import { animateError } from "../../utils";

const GameSquare = ({
  imagePath,
  i,
  j,
  type,
  selected,
  color,
  playerName,
  getData,
}) => {
  const clickHandler = () => {
    const clientData = {
      x: i,
      y: j,
      player: color,
      name: playerName,
    };
    squareClickedHandler(clientData, (response) => {
      if (response === "success") {
        getData();
      } else {
        const turnLabel = document.querySelector("#turn-label");
        animateError(turnLabel, response);
      }
    });
  };
  return (
    <button
      className="square"
      style={{
        background: (j + i) % 2 ? "black" : "white",
        border: selected
          ? "2px solid rgb(255,255,0)"
          : "1px solid rgb(136, 127, 127)",
      }}
      onClick={clickHandler}
    >
      <img src={process.env.PUBLIC_URL + imagePath} alt={type} />
    </button>
  );
};

export default GameSquare;

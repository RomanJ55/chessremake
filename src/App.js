import { useState } from "react";
import "./App.css";
import { getRandomInt, animateError } from "./utils";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Start from "./components/Start";
import Game from "./components/gameComponents/Game";

function App() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [gameTime, setGameTime] = useState(-1);
  const [isInRoom, setIsInRoom] = useState(false);

  const nameChangedHandler = (e) => {
    setName(e.target.value);
  };

  const roomChangedHandler = (e) => {
    setRoom(e.target.value);
  };

  const timeChangedHandler = (e) => {
    setGameTime(e.target.value);
  };

  const leaveHandler = () => {
    //server stuff

    //server stuff
    setRoom("");
    setGameTime(-1);
    setIsInRoom(false);
  };

  const nameSubmitHandler = (e) => {
    e.preventDefault();
    const userInput = document.querySelector("#user");
    if (name === "") {
      animateError(userInput, "username required");
    } else {
      // server stuff

      // server stuff
      const rc = document.querySelector("#rc");
      const confirmUser = document.querySelector("#confirmButton");
      userInput.disabled = true;
      confirmUser.disabled = true;
      rc.classList.remove("hidden");
    }
  };

  const createGameHandler = (e) => {
    e.preventDefault();
    const rndRoom = getRandomInt(100000000, 999999999);
    // server stuff

    if (name !== "" && gameTime > -1) {
      setRoom(rndRoom);
      setIsInRoom(true);
    }
  };

  const joinGameHandler = (e) => {
    e.preventDefault();
    if (room !== "") {
      // server stuff

      setIsInRoom(true);
    } else {
      const codeInput = document.querySelector("#code-input");
      animateError(codeInput, "invalid code");
    }
  };

  return (
    <div className="App">
      <Header />
      {isInRoom === false ? (
        <Start
          nameChangedHandler={nameChangedHandler}
          roomChangedHandler={roomChangedHandler}
          timeChangedHandler={timeChangedHandler}
          nameSubmitHandler={nameSubmitHandler}
          createGameHandler={createGameHandler}
          joinGameHandler={joinGameHandler}
        />
      ) : (
        <Game
          playerName={name}
          gameRoom={room}
          gameTime={gameTime}
          leaveHandler={leaveHandler}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;

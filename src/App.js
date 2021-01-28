import { useState } from "react";
import "./App.css";
import { getRandomInt, animateError } from "./utils";
import { createGame, joinGame, startGame } from "./socket";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Start from "./components/Start";
import Game from "./components/gameComponents/Game";

function App() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState(0);
  const [gameTime, setGameTime] = useState(-1);
  const [isInRoom, setIsInRoom] = useState(false);

  const nameChangedHandler = (e) => {
    setName(e.target.value);
  };

  const roomChangedHandler = (e) => {
    setRoom(parseInt(e.target.value));
  };

  const timeChangedHandler = (e) => {
    setGameTime(e.target.value);
  };

  const nameSubmitHandler = (e) => {
    e.preventDefault();
    const userInput = document.querySelector("#user");
    if (name === "") {
      animateError(userInput, "username required");
    } else {
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
    if (name !== "" && gameTime > -1) {
      const clientData = { username: name, room: rndRoom, timer: gameTime };
      createGame(clientData, (response) => {
        if (response === "success") {
          setRoom(rndRoom);
          setIsInRoom(true);
        }
      });
    }
  };

  const joinGameHandler = (e) => {
    const codeInput = document.querySelector("#code-input");
    e.preventDefault();
    if (room !== "") {
      const clientData = { username: name, room: room };
      joinGame(clientData, (response) => {
        if (response === "joined") {
          setIsInRoom(true);
          startGame();
        } else {
          animateError(codeInput, response);
        }
      });
    } else {
      animateError(codeInput, "Enter room code...");
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
        <Game playerName={name} gameRoom={room} setIsInRoom={setIsInRoom} />
      )}
      <Footer />
    </div>
  );
}

export default App;

import { io } from "socket.io-client";

const socket = io("https://chessapi55.herokuapp.com/game");
// const socket = io("http://localhost:5000/game");

export const createGame = (data, callback) => {
  socket.emit("createGame", data);
  socket.once("createGame", (serverData) => {
    return callback(serverData);
  });
};

export const joinGame = (data, callback) => {
  socket.emit("joinExisting", data);
  socket.once("joinExisting", (serverData) => {
    return callback(serverData);
  });
};

export const leaveGame = (data) => {
  socket.emit("leave", data);
};

export const startGame = () => {
  socket.emit("gameStart");
};

export const endGame = () => {
  socket.emit("gameEnd");
};

export const giveUp = (data) => {
  socket.emit("giveup", data);
};

export const restartGame = () => {
  socket.emit("restart");
};

export const squareClickedHandler = (data, callback) => {
  socket.emit("clicked", data);
  socket.once("clicked", (serverData) => {
    return callback(serverData);
  });
};

export const getGameData = (data, callback) => {
  socket.emit("data", data);
  socket.on("data", (serverData) => {
    return callback(serverData);
  });
};

export const getRoomData = (data, callback) => {
  socket.emit("roomData", data);
  socket.on("roomData", (serverData) => {
    return callback(serverData);
  });
};

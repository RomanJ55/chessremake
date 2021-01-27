const Start = ({
  nameChangedHandler,
  roomChangedHandler,
  timeChangedHandler,
  nameSubmitHandler,
  createGameHandler,
  joinGameHandler,
}) => {
  return (
    <div className="start">
      <div className="container flex">
        <h2 className="text-primary">Welcome to Online Chess</h2>
        <form className="form card" autoComplete="off">
          <p className="text-primary">Please choose a username:</p>
          <input
            onFocus={(e) => (e.target.value = "")}
            type="text"
            placeholder="username..."
            id="user"
            onChange={nameChangedHandler}
          ></input>
          <button
            className="btn"
            id="confirmButton"
            onClick={nameSubmitHandler}
          >
            Confirm
          </button>
        </form>
        <div className="room-control grid hidden" id="rc">
          <form className="create-form card text-primary">
            <p>Create a new game</p>
            <select id="time-select" name="time" onChange={timeChangedHandler}>
              <option value="-1">Choose a time...</option>
              <option value="5">5 Minutes</option>
              <option value="10">10 Minutes</option>
              <option value="15">15 Minutes</option>
              <option value="0">Timers disabled</option>
            </select>
            <button className="btn" onClick={createGameHandler}>
              Create
            </button>
          </form>
          <form className="join-form card text-primary" autoComplete="off">
            <p>Join a game</p>
            <input
              onFocus={(e) => (e.target.value = "")}
              id="code-input"
              placeholder="enter game-code..."
              onChange={roomChangedHandler}
            ></input>
            <button className="btn" onClick={joinGameHandler}>
              Join
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Start;

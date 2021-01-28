import React, { useState, useEffect } from "react";
import clock from "../../images/clock.png";
import clockTick from "../../images/clock_tick.gif";

const GameTimer = ({ timeoutHandler, run, timer, reset }) => {
  const [time, setTime] = useState(timer);
  const [isOn, setIsOn] = useState("");

  useEffect(() => {
    if (reset === false) {
      setTime(timer);
    }
  }, [reset, timer]);

  useEffect(() => {
    setIsOn(run);
    let interval = null;
    if (isOn) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (!isOn && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isOn, time, run]);

  if (time >= 0) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return seconds > 9 ? (
      <div className="time-area flex">
        <img src={isOn ? clockTick : clock} alt="Time" className="clock" />
        <h3 className="text-primary">
          {minutes}:{seconds}
        </h3>
      </div>
    ) : (
      <div className="time-area flex">
        <img src={isOn ? clockTick : clock} alt="Time" className="clock" />
        <h3 className="text-primary">
          {minutes}:0{seconds}
        </h3>
      </div>
    );
  } else {
    timeoutHandler();
    return (
      <div className="time-area flex">
        <img src={isOn ? clockTick : clock} alt="Time" className="clock" />
        <h3 className="text-primary">Time's up!</h3>
      </div>
    );
  }
};

export default GameTimer;

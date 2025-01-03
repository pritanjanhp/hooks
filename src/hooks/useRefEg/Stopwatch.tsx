import React, { useState, useRef } from "react";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  let handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondPassed = 0;
  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
  }

  let hourPassed = 0;
  if (secondPassed == 60) {
    hourPassed += 1;
    secondPassed -= 60;
  }

  return (
    <>
      <h2>Stopwatch</h2>
      <h1>Time Passed : {secondPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

export default Stopwatch;

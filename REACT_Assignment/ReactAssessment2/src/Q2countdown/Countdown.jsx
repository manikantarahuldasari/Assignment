import "./Countdown.css"
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // Exit early if countdown is finished
    if (seconds <= 0) return;

    // Set up the timer
    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer when the component unmounts or the countdown ends
    return () => clearInterval(timerId);
  }, [seconds]); // Re-run effect when `seconds` changes

  return (
    <div className="container">
      <h1>Countdown Timer</h1>
      <h2>{seconds > 0 ? seconds : "Time's up!"}</h2>
      
    </div>
  );
};

export default CountdownTimer;

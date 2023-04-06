import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState((new Date('2023-05-01T00:00:00Z').getTime() - Date.now()) / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Convert the remaining seconds to a human-readable format
  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((seconds % (60 * 60)) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  // Define the styles for the Timer component
  const timerStyles = {
    border: "2px solid black",
    borderRadius: "4px",
    padding: "16px",
    fontSize: "24px",
    fontWeight: "bold",
    backgroundColor: "#f7f7f7",
    color: "#333",
    margin: "16px auto",
    maxWidth: "600px",
    textAlign: "center"
  };

  return (
    <div style={timerStyles}>
      {days} days, {hours} hours, {minutes} minutes, and {remainingSeconds} seconds until May 1st.
    </div>
  );
}

export default Timer;

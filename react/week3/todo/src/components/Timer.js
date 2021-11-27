import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setTime((t) => t + 1), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="timer">
      You have{" "}
      <em>
        <b> used </b>
      </em>
      {time}
      seconds
    </div>
  );
}
export default Timer;

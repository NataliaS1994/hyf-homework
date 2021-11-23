import React, { useEffect, useState }  from 'react';

function Timer() {
    const [time, setTime] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => setTime((t) => t + 1), 1000);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return <div>Time spend on the website is: {time}</div>;
  }

export default Timer;
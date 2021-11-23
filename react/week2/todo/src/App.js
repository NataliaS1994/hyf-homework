import React, { useEffect, useState } from "react";
import "./App.css";
import data from "./data/data.json";
import Header from "./components/Header";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";

function App() {
  const [time, setTime] = useState(null);
  useEffect(() => {
    if (time === null) setTimeout(() => setTime(data), 3000);
    return () => {
      clearInterval();
    };
  }, []);
  return (
    <div>
      <Header />
      <Timer />
      {time ? <TodoList todos={time} /> : <p>Loading...</p>}
    </div>
  );
}
export default App;

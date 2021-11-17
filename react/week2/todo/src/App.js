import React, { useState } from 'react';
import "./App.css";
import data from "./data/data.json";
import Header from "./components/Header";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";

function App() {
  // hooks
  const [state, setState] = useState(null);
  if (state === null) setTimeout(() => setState(data), 3000);

  return (

    <div className="App">
      <Header />
      <Timer />
      {state ? <TodoList items={state} /> : <p>Loading...</p>}
    </div>
  );
}


export default App;
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Timer from "./components/Timer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState("false");

  const url =
    "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";
  async function fetchingData() {
    const result = await fetch(url);
    const todos = await result.json();
    setTodos(todos);
    setIsLoaded(false);
  }
  useEffect(() => {
    fetchingData();
  }, []);

  const deleteSearchItem = (id) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <div>
        <Header />
        <Timer />
        <TodoForm todos={todos} setTodos={setTodos} />
        {todos.length === 0 && <h3> No items </h3>}
        <div>
          {isLoaded ? (
            "Loading..."
          ) : (
            <TodoList todos={todos} delete={deleteSearchItem} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

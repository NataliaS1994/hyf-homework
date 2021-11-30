import React, { useState } from "react";

function TodoForm({ todos, setTodos }) {
  const [inputTodo, setInputTodo] = useState("");
  const [inputDate, setInputDate] = useState("");

  const buttonAddTodo = () => {
    const nextTodo = {
      description: inputTodo,
      deadline: inputDate,
    };
    let newTodos = todos.concat(nextTodo);
    if (inputTodo && inputDate) setTodos(newTodos);
  };
  return (
    <div>
      <label>
        Todo Description:{" "}
        <input
          onChange={(e) => setInputTodo(e.target.value)}
          type="text"
          placeholder="description"
        />
      </label>{" "}
      <br />
      <label className="style-deadline-button">
        Deadline:{" "}
        <input onChange={(e) => setInputDate(e.target.value)} type="date" />
      </label>{" "}
      <br />
      <button className="add-button" onClick={buttonAddTodo}>
        Add Todo{" "}
      </button>{" "}
    </div>
  );
}

export default TodoForm;

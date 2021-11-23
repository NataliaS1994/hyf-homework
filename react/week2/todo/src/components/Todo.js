import React, { useState } from "react";

function Todo(props) {
  const [state, setTodos] = useState([...props.todos]);

  const addTodo = () => {
    // Add random todo
    const addRandomTodo = (arr) => {
      const newId = arr.length
        ? Math.max(...arr.map((todo) => todo.id)) + 1
        : 1;
      const newTodos = arr.concat({
        id: newId,
        description: "Go to school",
        done: false,
      });
      setTodos(newTodos);
    };

    return (
      <button
        onClick={() => {
          addRandomTodo(state);
        }}
      >
        Add todo{" "}
      </button>
    );
  };
  //Mark todo todo as done
  const handleCheck = (id) => {
    const newState = state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });
    setTodos(newState);
  };

  //Delete todo
  const deleteTodo = (id) => {
    setTodos(state.filter((todo) => todo.id !== id));
  };

  const todos = state.map((todo) => {
    return (
      <li key={todo.id}>
        <span className={todo.done ? "line-through" : "no-decoration"}>
          {" "}
          {todo.description}{" "}
        </span>{" "}
        <input
          type="checkbox"
          name={todo.description}
          checked={todo.done && "checked"}
          onChange={() => handleCheck(todo.id)}
        />{" "}
        <button onClick={() => deleteTodo(todo.id)}> Delete </button>{" "}
      </li>
    );
  });

  //If no todos render "No todos"
  return (
    <>
      {" "}
      {addTodo()} {state.length === 0 && <span> No todos </span>}{" "}
      <ul> {todos} </ul>{" "}
    </>
  );
}

export default Todo;

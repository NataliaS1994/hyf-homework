import React from "react";
import "./App.css";

function TodoList({date, description}) {
    return(
        <div className="list">
            <h1>Todo List</h1>
            <h3>{date}</h3>
            <p>{description}</p>
        </div>
    );
}
export default TodoList;
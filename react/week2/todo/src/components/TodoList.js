import React from "react";
import List from "./Todo";

function TodoList(props) {
  return (
    <section className="List">
      <List todos={props.todos} />{" "}
    </section>
  );
}

export default TodoList;

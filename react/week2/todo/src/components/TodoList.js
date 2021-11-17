import React from "react";
import List from "./Todo";

function TodoList(props) {
  return (
    <section className="List">
      <List items={props.items} />
    </section>
  );
}

export default TodoList;
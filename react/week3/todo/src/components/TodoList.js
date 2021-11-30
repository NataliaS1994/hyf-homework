import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <TodoItem
            todoId={todo.id}
            todoDescription={todo.description}
            todoDeadline={todo.deadline}
            //props for buttons to work
            delete={props.delete}
            edit={props.edit}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;

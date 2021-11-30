import React, { useState } from "react";
//typecheck
import PropTypes from "prop-types";

const TodoItem = (props) => {
  const { todoId, todoDescription, todoDeadline } = props;
  const [check, setCheck] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todoDescription);
  const [input, setInput] = useState(false);
  const isDone = () => setCheck(!check);
  const [edit, setEdit] = useState(true);

  const updateInputState = () => {
    setInput(!input);
    setEdit(!edit);
  };

  return (
    <div>
      <li key={todoId}>
        {input ? (
          <input
            type="text"
            checked={check}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
        ) : (
          updatedTodo
        )}
        | {todoDeadline} <input type="checkbox" onClick={isDone} />{" "}
        <button className="delete-button" onClick={() => props.delete(todoId)}>
          Delete
        </button>{" "}
        <button
          onClick={updateInputState}
          style={{ color: edit ? "white" : "red" }}
        >
          {edit ? "Edit" : "Update"}
        </button>
      </li>
    </div>
  );
};

TodoItem.propTypes = {
  TodoDescription: PropTypes.string.isRequired,
  //calendar
  todoDeadline: PropTypes.instanceOf(new Date()).isRequired,
};
export default TodoItem;

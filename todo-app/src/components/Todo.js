import React from "react";

const Todo = props => {
  console.log("Todo Props", props);
  return (
    <div>
      <h3>hi</h3>
      <div
        className={`${props.item.completed ? "completed" : ""}`}
        onClick={() => props.toggleTodo(props.item.id)}
      >
        <p>{props.item}</p>
      </div>
    </div>
  );
};

export default Todo;

import React from "react";

const Todo = props => {
  console.log("Todo Props", props);
  return (
    <div>
      <h3>hi</h3>
      <div
        className={`${props.completed ? "completed" : ""}`}
        onClick={() => props.toggleTodo(props.id)}
      >
        <p>{props.item}</p>
        <p>{`${props.completed}`}</p>
      </div>
    </div>
  );
};

export default Todo;

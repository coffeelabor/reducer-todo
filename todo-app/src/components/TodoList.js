import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <div>
      <h2>Howdy</h2>
      {props.todos.map(todo => (
        <Todo key={todo.id} item={todo.item} />
      ))}
    </div>
  );
};

export default TodoList;

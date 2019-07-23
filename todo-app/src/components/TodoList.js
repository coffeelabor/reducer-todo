import React from "react";
import Todo from "./Todo";

const TodoList = props => {
  console.log("TodoList Props", props);
  return (
    <div>
      <h2>Howdy</h2>
      {props.todos.map(todo => (
        <Todo key={todo.id} item={todo.item} toggleTodo={props.toggleTodo} />
      ))}
      <button onClick={props.clearTodo}>Clear it!</button>
    </div>
  );
};

export default TodoList;

import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import AddForm from "./components/AddForm";
import { reducer, initialState } from "./reducers/reducer";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = todo => {
    // e.preventDefault();
    console.log("todo in addTodo", todo);
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const toggleTodo = todoId => {
    dispatch({ type: "TOGGLE_TODO", payload: todoId });
  };

  const clearTodo = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_TODO" });
  };

  return (
    <div className="App">
      <h1>hello</h1>
      <TodoList
        todos={state.todos}
        toggleTodo={toggleTodo}
        clearTodo={clearTodo}
      />
      <AddForm addTodo={addTodo} />
    </div>
  );
};

export default App;

import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import { reducer, initialState } from "./reducers/reducer";
import "./App.css";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>hello</h1>
      <TodoList todos={state.todos} />
    </div>
  );
};

export default App;

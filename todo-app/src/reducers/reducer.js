export const initialState = {
  todos: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 1
    },
    {
      item: "Learn about useState",
      completed: false,
      id: 2
    },
    {
      item: "Learn about useEffect",
      completed: false,
      id: 3
    },
    {
      item: "Learn about backend",
      completed: false,
      id: 4
    },
    {
      item: "Learn about frontend",
      completed: false,
      id: 5
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case "TOGGLE_TODO":
      return {
        // ...state,
        todos: state.todos.map(todo => {
          if (action.payload === todo.id) {
            return { completed: true };
            // return { completed: !todo.completed };
          }
          return todo;
        })
      };
    case "CLEAR_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    default:
      return state;
  }
};

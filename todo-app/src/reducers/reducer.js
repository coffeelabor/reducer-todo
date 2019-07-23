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
  return state;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    case "INC10":
      return state + 10;
    case "DEC10":
        return state - 10;
    default:
      return state;
  }
};

export default reducer;

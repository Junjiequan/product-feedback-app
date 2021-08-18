const sortsReducer = (state: string = "Most Upvotes", action: any) => {
  switch (action.type) {
    case "SET_SORT":
      return (state = action.sort);
    default:
      return state;
  }
};

export default sortsReducer;

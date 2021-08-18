const filtersReducer = (state: string = "all", action: any) => {
  switch (action.type) {
    case "SET_FILTER":
      return (state = action.payload);
    default:
      return state;
  }
};

export default filtersReducer;

//vote controller
export const toggleVote = (item: any) => {
  return {
    type: "toggleVote",
    payload: item,
  };
};

export const addFeedback = (item: any) => {
  return {
    type: "ADD_FEEDBACK",
    payload: item,
  };
};

export const upVote = (item: any) => {
  return {
    type: "UP_VOTE",
    payload: item,
  };
};
export const downVote = (item: any) => {
  return {
    type: "DOWN_VOTE",
    payload: item,
  };
};
export const setFilter = (item: any) => {
  return {
    type: "SET_FILTER",
    payload: item,
  };
};
export const setSort = (item: any) => {
  return {
    type: "SET_SORT",
    sort: item,
  };
};

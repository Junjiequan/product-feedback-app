import { Item } from "../Types";

export const addFeedback = (item: Item) => {
  return {
    type: "ADD_FEEDBACK",
    payload: item,
  };
};

export const upVote = (item: Item) => {
  return {
    type: "UP_VOTE",
    payload: item,
  };
};
export const downVote = (item: Item) => {
  return {
    type: "DOWN_VOTE",
    payload: item,
  };
};
export const setFilter = (item: string) => {
  return {
    type: "SET_FILTER",
    payload: item,
  };
};
export const setSort = (item: string) => {
  return {
    type: "SET_SORT",
    sort: item,
  };
};

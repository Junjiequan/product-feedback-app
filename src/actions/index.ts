import { Item, Comments_type } from "../Types";

export const addFeedback = (item: Item) => {
  return {
    type: "ADD_FEEDBACK",
    payload: item,
  };
};
export const editFeedback = (item: Item) => {
  return {
    type: "EDIT_FEEDBACK",
    payload: item,
  };
};
export const delFeedback = (item: string) => {
  return {
    type: "DEL_FEEDBACK",
    payload: item,
  };
};
export const addComment = (item: Comments_type, param: string) => {
  return {
    type: "ADD_COMMENT",
    payload: item,
    target: param,
  };
};
export const addDirectReply = (item: Comments_type, target_id: string) => {
  return {
    type: "ADD_DIRECTREPLY",
    payload: item,
    target: target_id,
  };
};
export const addInnerReply = (item: Comments_type, target_id: string) => {
  return {
    type: "ADD_INNERREPLY",
    payload: item,
    target: target_id,
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

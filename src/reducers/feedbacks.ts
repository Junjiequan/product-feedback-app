import { initialState } from "./initialStates";
import { InitialState } from "../Types";
import {
  onAdd,
  onEdit,
  onDel,
  upVote,
  downVote,
  addComment,
  addDirectReply,
  addInnerReply,
} from "./feedbacksUtility";

const feedbackReducer = (state: InitialState = initialState, action: any) => {
  switch (action.type) {
    case "ADD_FEEDBACK":
      return {
        ...state,
        items: onAdd(state.items, action.payload),
      };
    case "EDIT_FEEDBACK":
      return {
        ...state,
        items: onEdit(state.items, action.payload),
      };
    case "DEL_FEEDBACK":
      return {
        ...state,
        items: onDel(state.items, action.payload),
      };
    case "ADD_COMMENT":
      return {
        ...state,
        items: addComment(state.items, action.payload, action.target),
      };
    case "ADD_DIRECTREPLY":
      return {
        ...state,
        items: addDirectReply(state.items, action.payload, action.target),
      };
    case "ADD_INNERREPLY":
      return {
        ...state,
        items: addInnerReply(state.items, action.payload, action.target),
      };
    // case "DEL_COMMENT":
    //   return {
    //     ...state,
    //   };
    case "UP_VOTE":
      return {
        ...state,
        items: upVote(state.items, action.payload),
      };
    case "DOWN_VOTE":
      return {
        ...state,
        items: downVote(state.items, action.payload),
      };
    default:
      return state;
  }
};

export default feedbackReducer;

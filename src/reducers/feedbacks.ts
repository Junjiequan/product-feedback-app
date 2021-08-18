import { initialState, InitialState_TYPE } from "./initialStates";

const onAdd = (currentItem: any, newItem: any) => {
  const exist = currentItem.find((item: any) => item.title === newItem.title);

  if (exist) {
    alert("Feedback title is existing.");
    return currentItem;
  } else {
    const addedNewItem = [...currentItem, { ...newItem }];
    return addedNewItem;
  }
};
const upVote = (currentItem: any, newItem: any) => {
  const exist = currentItem.find((item: any) => item.title === newItem.title);
  if (exist) {
    const voted = currentItem.map((item: any) =>
      item.title === newItem.title
        ? { ...exist, vote: exist.vote + 1, voted: true }
        : item
    );
    return voted;
  } else return currentItem;
};
const downVote = (currentItem: any, newItem: any) => {
  const exist = currentItem.find((item: any) => item.title === newItem.title);
  if (exist) {
    const voted = currentItem.map((item: any) =>
      item.title === newItem.title
        ? { ...exist, vote: exist.vote - 1, voted: false }
        : item
    );
    return voted;
  } else return currentItem;
};

const feedbackReducer = (
  state: InitialState_TYPE = initialState,
  action: any
) => {
  switch (action.type) {
    case "ADD_FEEDBACK":
      return {
        ...state,
        items: onAdd(state.items, action.payload),
      };
    case "EDIT_FEEDBACK":
      return {
        ...state,
      };
    case "DEL_FEEDBACK":
      return {
        ...state,
      };
    case "ADD_COMMENT":
      return {
        ...state,
      };
    case "DEL_COMMENT":
      return {
        ...state,
      };
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

import { combineReducers } from "redux";
import feedbackReducer from "./feedbacks";
import filtersReducer from "./filters";
import sortsReducer from "./sorts";

export const allReducer = combineReducers({
  feedbacks: feedbackReducer,
  filters: filtersReducer,
  sorts: sortsReducer,
});

import { combineReducers } from 'redux';
import feedbackReducer from './feedbacks'

export const allReducer = combineReducers({
    feedbacks : feedbackReducer,
})
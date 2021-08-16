import { combineReducers } from 'redux';
import voteToggle from './voteToggle'
import feedbackReducer from './feedbacks'

export const allReducer = combineReducers({
    voteCounter : voteToggle,
    feedbacks : feedbackReducer,
})
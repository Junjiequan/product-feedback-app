import { combineReducers } from 'redux';
import voteCounterReducer from './voteCounter'

export const allReducer = combineReducers({
    voteCounter : voteCounterReducer

})
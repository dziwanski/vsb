import {combineReducers} from 'redux';

import repairHistoryReducer from "./repairHistoryReducer";
import scheduledWorksReducer from "./scheduledWorksReducer";

export const rootReducer = combineReducers({
    repairHistoryReducer: repairHistoryReducer,
    scheduledWorksReducer: scheduledWorksReducer,
});
import { combineReducers } from 'redux';

import repairHistoryReducer from "./repairHistoryReducer";

export const rootReducer = combineReducers({
    repairHistoryReducer: repairHistoryReducer,
});
import { combineReducers } from 'redux';

import worksReducer from "./worksReducer";

export const rootReducer = combineReducers({
    worksReducer: worksReducer,
});
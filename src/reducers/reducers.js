import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export const rootReducers = combineReducers({
    todo: todoReducer
});

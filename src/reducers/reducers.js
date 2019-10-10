import counter from "./counter";
import isLoggedIn from "./isLoggedIn";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counter,
    isLoggedIn: isLoggedIn
});

export default rootReducer;

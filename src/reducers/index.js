import { combineReducers } from "redux";
// import { boards as defaultBoards } from "../normalized-state";
import { boards as defaultBoards } from "../default-state.json";
import { ADD_BOARD } from "../actions/actionCreators";

const boardReducer = (boards = defaultBoards, action) => {
    console.log(boards);
    return boards;
};

export const rootReducer = combineReducers({
    boards: boardReducer
});

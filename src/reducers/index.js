import { combineReducers } from "redux";
import { boards as defaultBoards } from "../normalized-state";

const boardReducer = (boards = defaultBoards, actions) => {
    console.log(boards);
    return boards;
};

export const rootReducer = combineReducers({
    board: boardReducer
});

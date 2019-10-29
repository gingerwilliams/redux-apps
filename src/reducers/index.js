import { combineReducers } from "redux";
// import { boards as defaultBoards } from "../normalized-state";
import { boards as defaultBoards } from "../default-state.json";
import { ADD_BOARD } from "../actions/actionCreators";

const boardReducer = (boards = defaultBoards, action) => {
    // console.log(boards);
    if (action.type === ADD_BOARD) {
        console.log(action);
        const boardId = Date.now().toString();
        return [
            {
                title: action.payload.title,
                summary: action.payload.summary,
                id: boardId
            },
            ...boards
        ];
    }
    return boards;
};

export const rootReducer = combineReducers({
    boards: boardReducer
});

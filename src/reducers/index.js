import { combineReducers } from "redux";
// import { boards as defaultBoards } from "../normalized-state";
import { boards as defaultBoards } from "../default-state.json";
import { ADD_BOARD, EDIT_BOARD } from "../actions/actionCreators";

const boardReducer = (boards = defaultBoards, action) => {
    if (action.type === ADD_BOARD) {
        const boardId = Date.now().toString();
        return [
            {
                title: action.payload.title,
                summary: action.payload.summary,
                id: boardId,
                posts: []
            },
            ...boards
        ];
    }
    if (action.type === EDIT_BOARD) {
        return boards.map(board => {
            if (action.payload.id === board.id) {
                return {
                    title: action.payload.title,
                    summary: action.payload.summary,
                    id: action.payload.id,
                    posts: action.payload.posts
                };
            }
            return board;
        });
    }
    return boards;
};

export const rootReducer = combineReducers({
    boards: boardReducer
});

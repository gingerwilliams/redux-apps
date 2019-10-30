import { combineReducers } from "redux";
// import { boards as defaultBoards } from "../normalized-state";
import { boards as defaultBoards } from "../default-state.json";
import { ADD_BOARD, EDIT_BOARD, ADD_POST } from "../actions/actionCreators";

const boardReducer = (boards = defaultBoards, action) => {
    if (action.type === ADD_BOARD) {
        const boardId = "_board_" + Date.now().toString();
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
    if (action.type === ADD_POST) {
        const postId = "_post_" + Date.now().toString();
        const posts = [...boards].filter(
            board => board.id === action.payload.boardId
        )[0].posts;
        console.log("ADD_POST", action);

        return boards.map(board => {
            if (board.id === action.payload.boardId) {
                return {
                    id: board.id,
                    title: board.title,
                    summary: board.summary,
                    posts: [
                        {
                            title: action.payload.title,
                            body: action.payload.body,
                            id: postId,
                            comments: []
                        },
                        ...posts
                    ]
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

export const ADD_BOARD = "ADD_BOARD";
export const EDIT_BOARD = "EDIT_BOARD";

// const defaultNewBoardData = {
//     title: "",
//     summary: "",
//     user: ""
// };

export const addBoard = (title, summary, id, posts) => {
    return {
        type: ADD_BOARD,
        payload: {
            title,
            summary,
            id,
            posts
        }
    };
};

export const editBoard = (title, summary, id, posts) => {
    return {
        type: EDIT_BOARD,
        payload: {
            title,
            summary,
            id,
            posts
        }
    };
};

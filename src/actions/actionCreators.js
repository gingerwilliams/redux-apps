export const ADD_BOARD = "ADD_BOARD";

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

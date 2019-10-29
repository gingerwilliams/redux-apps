export const ADD_BOARD = "ADD_BOARD";

// const defaultNewBoardData = {
//     title: "",
//     summary: "",
//     user: ""
// };

export const addBoard = (title, summary, id) => {
    return {
        type: ADD_BOARD,
        payload: {
            title,
            summary,
            id
        }
    };
};

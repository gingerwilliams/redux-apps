export const CREATE_USER = "CREATE_USER";
export const ADD_BOARD = "ADD_BOARD";
export const ADD_POST = "ADD_POST";
export const EDIT_BOARD = "EDIT_BOARD";
export const EDIT_POST = "EDIT_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";

// const defaultNewBoardData = {
//     title: "",
//     summary: "",
//     user: ""
// };

export const createUser = (name, id) => {
    return {
        type: CREATE_USER,
        payload: {
            name,
            id
        }
    };
};

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

export const addPost = (boardId, title, body, id, comments) => {
    return {
        type: ADD_POST,
        payload: {
            boardId,
            title,
            body,
            id,
            comments
        }
    };
};

export const editPost = (boardId, title, body, id, comments) => {
    return {
        type: EDIT_POST,
        payload: {
            boardId,
            title,
            body,
            id,
            comments
        }
    };
};

export const addComment = (boardId, postId, user, text) => {
    return {
        type: ADD_COMMENT,
        payload: {
            boardId,
            postId,
            user,
            text
        }
    };
};

export const editComment = (boardId, postId, commentId, user, text) => {
    return {
        type: EDIT_COMMENT,
        payload: {
            boardId,
            postId,
            commentId,
            user,
            text
        }
    };
};

import { combineReducers } from "redux";
// import { boards as defaultBoards } from "../normalized-state";
import { boards as defaultBoards } from "../default-state.json";

import {
    ADD_BOARD,
    EDIT_BOARD,
    ADD_POST,
    EDIT_POST,
    ADD_COMMENT,
    EDIT_COMMENT,
    CREATE_USER
} from "../actions/actionCreators";

const boardReducer = (boards = defaultBoards, action) => {
    if (action.type === ADD_BOARD) {
        //create an id for the new board
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
        //create an id for the new post
        const postId = "_post_" + Date.now().toString();
        //find the target board
        const b = boards.find(board => board.id === action.payload.boardId);
        //target boards posts
        const posts = b.posts;

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
    if (action.type === EDIT_POST) {
        //find the target board
        const b = boards.find(board => board.id === action.payload.boardId);
        //find the target post
        const p = b.posts.find(post => post.id === action.payload.id);
        //seperate the rest of the unedited post
        const restPost = b.posts.filter(p => p.id !== action.payload.id);
        //updated post data
        const updatedPost = {
            id: p.id,
            title: action.payload.title,
            body: action.payload.body,
            comments: p.comments
        };

        return boards.map(board => {
            if (board.id === action.payload.boardId) {
                return {
                    id: board.id,
                    title: board.title,
                    summary: board.summary,
                    posts: [updatedPost, ...restPost]
                };
            }
            return board;
        });
    }
    if (action.type === ADD_COMMENT) {
        console.log("add comment", action.payload);
        //create an id for the new comment
        const commentId = "_comment_" + Date.now().toString();
        //find the target board
        const b = boards.find(board => board.id === action.payload.boardId);
        //find the target post
        const p = b.posts.find(post => post.id === action.payload.postId);
        const otherposts = b.posts.filter(
            post => post.id !== action.payload.postId
        );
        //list of comments from target post
        const comments = p.comments;

        //newComment to be added
        const newComment = {
            id: commentId,
            user: action.payload.user,
            text: action.payload.text
        };

        // return new list, check to see if existing comments exist
        const newCommentList = comments
            ? [newComment, ...comments]
            : [newComment];

        console.log(comments);
        return boards.map(board => {
            if (board.id === action.payload.boardId) {
                return {
                    id: board.id,
                    title: board.title,
                    summary: board.summary,
                    posts: [
                        {
                            title: p.title,
                            body: p.body,
                            id: p.id,
                            comments: newCommentList
                        },
                        ...otherposts
                    ]
                };
            }
            return board;
        });
    }
    if (action.type === EDIT_COMMENT) {
        //find the target board
        const b = boards.find(board => board.id === action.payload.boardId);
        //find the target post
        const p = b.posts.find(post => post.id === action.payload.postId);
        //filter out the target post
        const otherposts = b.posts.filter(
            post => post.id !== action.payload.postId
        );

        // //list of comments from target post
        // const comments = p.comments;

        //find the target comment
        const c = p.comments.find(
            comment => comment.id === action.payload.commentId
        );

        //filter out the target comments
        const otherComments = p.comments.filter(
            comment => comment.id !== action.payload.commentId
        );

        console.log("edit_comment_reducer", c);

        // updated comment data
        const updatedComment = {
            id: c.id,
            user: c.user,
            text: action.payload.text
        };

        return boards.map(board => {
            if (board.id === action.payload.boardId) {
                return {
                    id: board.id,
                    title: board.title,
                    summary: board.summary,
                    posts: [
                        {
                            title: p.title,
                            body: p.body,
                            id: p.id,
                            comments: [updatedComment, ...otherComments]
                        },
                        ...otherposts
                    ]
                };
            }
            return board;
        });
    }
    return boards;
};

const userReducer = (users = {}, action) => {
    if (action.type === CREATE_USER) {
        console.log("CREATE_USER");
        const id = `_uid_${Date.now().toString()}`;

        return {
            name: action.payload.name,
            id: id
        };
    }
    return users;
};

export const rootReducer = combineReducers({
    boards: boardReducer,
    user: userReducer
});

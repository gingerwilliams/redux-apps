import { combineReducers } from "redux";
// import { boards as defaultBoards } from "../normalized-state";
import { boards as defaultBoards } from "../default-state.json";
import {
    ADD_BOARD,
    EDIT_BOARD,
    ADD_POST,
    EDIT_POST,
    ADD_COMMENT
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

    return boards;
};

export const rootReducer = combineReducers({
    boards: boardReducer
});

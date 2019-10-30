import React, { useState } from "react";
import PostsContainer from "../containers/PostsContainer";
import EditBoardFormContainer from "../containers/EditBoardFormContainer";
import CreatePostContainer from "../containers/CreatePostContainer";

const Board = ({ board }) => {
    const [isEditBoard, toggleEditBoard] = useState(false);
    const [isAddPost, toggleAddPost] = useState(false);

    const currentBoard = board[0]; //move to reducer

    return (
        <article className="Board">
            <h3>{currentBoard.title}</h3>
            <div>{currentBoard.summary}</div>
            <button onClick={() => toggleEditBoard(!isEditBoard)}>
                {isEditBoard ? "cancel" : "edit board"}
            </button>
            {isEditBoard ? (
                <EditBoardFormContainer
                    boardId={currentBoard.id}
                    isEditBoard={() => toggleEditBoard(!isEditBoard)}
                />
            ) : (
                ""
            )}

            <hr />

            <button onClick={() => toggleAddPost(!isAddPost)}>
                <span>➕</span> Add Post
            </button>
            {isAddPost ? (
                <CreatePostContainer
                    boardId={currentBoard.id}
                    isAddPost={() => toggleAddPost(!isAddPost)}
                />
            ) : (
                ""
            )}

            <PostsContainer boardId={currentBoard.id} />
        </article>
    );
};

export default Board;

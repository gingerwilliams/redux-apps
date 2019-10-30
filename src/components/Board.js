import React, { useState } from "react";
// import Posts from "./Posts";
import PostsContainer from "../containers/PostsContainer";
import EditBoardFormContainer from "../containers/EditBoardFormContainer";

const Board = ({ board }) => {
    const [isEditBoard, toggleEditBoard] = useState(false);
    const handleClick = e => {
        e.preventDefault();
    };
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
            <a onClick={handleClick}>
                <span>➕</span> Add Post
            </a>

            <PostsContainer boardId={currentBoard.id} />
        </article>
    );
};

export default Board;

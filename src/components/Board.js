import React from "react";

const Board = ({ board }) => {
    const handleClick = e => {
        e.preventDefault();
        console.log("new post");
    };
    const currentBoard = board[0];

    return (
        <article className="Board">
            <h3>{currentBoard.title}</h3>
            <div>{currentBoard.summary}</div>
            <a onClick={handleClick}>
                <span>➕</span> Add Post
            </a>
        </article>
    );
};

export default Board;

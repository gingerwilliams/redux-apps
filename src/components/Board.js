import React from "react";

const Board = ({ board }) => {
    console.log("board props", board);
    return (
        <article className="Board">
            <h3>{board.title}</h3>
            <div>{board.summary}</div>
        </article>
    );
};

export default Board;

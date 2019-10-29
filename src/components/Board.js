import React from "react";

const Board = ({ board }) => {
    console.log("board props", board);
    return (
        <div>
            <h3>{board.title}</h3>
            <div>{board.summary}</div>
        </div>
    );
};

export default Board;

import React from "react";
import Board from "./Board";

const Boards = ({ boards }) => {
    return (
        <section>
            {boards.map(boardId => (
                <Board key={boardId} />
            ))}
        </section>
    );
};

export default Boards;

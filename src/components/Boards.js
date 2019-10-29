import React from "react";
import BoardContainer from "../containers/BoardContainer";

const Boards = ({ boards }) => {
    return (
        <section>
            {boards.map(boardId => (
                <BoardContainer key={boardId} boardId={boardId} />
            ))}
        </section>
    );
};

export default Boards;

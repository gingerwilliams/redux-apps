import React from "react";
import BoardContainer from "../containers/BoardContainer";
import Board from "../components/Board";

const Boards = ({ boards }) => {
    return (
        <section className="Boards">
            {boards.map(board => (
                <BoardContainer key={board.id} boardId={board.id} />
            ))}
        </section>
    );
};

export default Boards;

import Board from "../components/Board";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    const board = state.boards.find(board => board.id === ownProps.boardId);

    return {
        board: board
    };
};

export default connect(mapStateToProps)(Board);

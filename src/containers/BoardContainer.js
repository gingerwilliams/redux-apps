import Board from "../components/Board";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    const board = state.boards.filter(board => board.id === ownProps.boardId);

    return {
        board: board
    };
};

export default connect(mapStateToProps)(Board);

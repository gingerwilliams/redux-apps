import EditBoardForm from "../components/EditBoardForm";
import { connect } from "react-redux";
import { editBoard } from "../actions/actionCreators";

const mapStateToProps = (state, ownProps) => {
    const board = state.boards.filter(board => board.id === ownProps.boardId);
    const currentBoard = board[0];

    return {
        board: currentBoard
    };
};

export default connect(
    mapStateToProps,
    { editBoard }
)(EditBoardForm);

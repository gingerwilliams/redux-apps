import Board from "../components/Board";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    // console.log("ownProps", ownProps);
    // console.log("state", state);
    return {
        board: state.board.entities[ownProps.boardId]
    };
};

export default connect(mapStateToProps)(Board);

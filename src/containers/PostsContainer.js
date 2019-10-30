import Posts from "../components/Posts";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    const current = state.boards.filter(board => board.id === ownProps.boardId);
    const board = current[0];
    return {
        posts: board.posts,
        boardId: ownProps.boardId
    };
};

export default connect(mapStateToProps)(Posts);

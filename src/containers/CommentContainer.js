import Comment from "../components/Comment";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    const board = state.boards.find(board => board.id === ownProps.boardId);
    const post = board.posts.find(post => post.id === ownProps.postId);
    const comment = post.comments.find(
        comment => comment.id === ownProps.commentId
    );

    return {
        comment: comment
    };
};

export default connect(mapStateToProps)(Comment);

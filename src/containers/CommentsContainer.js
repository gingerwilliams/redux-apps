import Comments from "../components/Comments";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    const board = state.boards.find(board => board.id === ownProps.boardId);
    const post = board.posts.find(post => post.id === ownProps.postId);

    if (post.comments) {
        return {
            comments: post.comments
        };
    }
    return { comments: [] };
};

export default connect(mapStateToProps)(Comments);

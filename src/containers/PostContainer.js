import Post from "../components/Post";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    // console.log("state", state);
    // console.log("ownProps", ownProps);
    const currentBoard = state.boards.filter(
        board => board.id === ownProps.boardId
    );
    const currentPost = currentBoard[0].posts.filter(
        post => post.id === ownProps.postId
    );
    const post = currentPost[0];

    // console.log("currentBoard", currentBoard);
    // console.log("currentPosts", currentPost);
    return {
        post: post
    };
};

export default connect(mapStateToProps)(Post);

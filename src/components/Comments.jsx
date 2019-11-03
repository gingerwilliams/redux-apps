import React from "react";
// import Comment from "./Comment";
import CommentContainer from "../containers/CommentContainer";

const Comments = ({ comments, boardId, postId }) => {
    return (
        <ul className="Comments">
            {comments.map(comment => (
                <CommentContainer
                    boardId={boardId}
                    postId={postId}
                    commentId={comment.id}
                    key={comment.id}
                />
            ))}
        </ul>
    );
};

export default Comments;

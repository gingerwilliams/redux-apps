import React, { useState } from "react";
import EditCommentFormContainer from "../containers/EditCommentFormContainer";

// ({ comment })
const Comment = ({ comment, boardId, postId }) => {
    //console.log(props);
    const [isEditComment, toggleEditComment] = useState(false);
    return (
        <li className="Comment">
            <b>{comment.user}: </b>
            <span>{comment.text}</span>
            <button onClick={() => toggleEditComment(!isEditComment)}>🖊</button>
            {isEditComment ? (
                <EditCommentFormContainer
                    boardId={boardId}
                    postId={postId}
                    commentId={comment.id}
                    isEditComment={() => toggleEditComment(!isEditComment)}
                />
            ) : (
                ""
            )}
        </li>
    );
};

export default Comment;

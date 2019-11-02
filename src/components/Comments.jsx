import React from "react";

const Comments = ({ comments, boardId, postId }) => {
    console.log("Comments", comments);
    return (
        <ul className="Comments">
            {comments.map(comment => (
                <li className="Comment" key={comment.id}>
                    <b>{comment.user}: </b>
                    <span>{comment.text}</span>
                    <button>🖊</button>
                </li>
            ))}
        </ul>
    );
};

export default Comments;

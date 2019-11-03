import React from "react";

const Comment = ({ comment }) => {
    return (
        <li className="Comment">
            <b>{comment.user}: </b>
            <span>{comment.text}</span>
            <button>🖊</button>
        </li>
    );
};

export default Comment;

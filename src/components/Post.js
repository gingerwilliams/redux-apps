import React, { useState } from "react";
import EditPostForm from "./EditPostForm";
import EditPostFormContainer from "../containers/EditPostFormContainer";

const Post = ({ post, boardId, postId }) => {
    const [isEditPost, toggleEditPost] = useState(false);

    return (
        <li className="Post">
            <button onClick={() => toggleEditPost(!isEditPost)}>🖊</button>
            {isEditPost ? (
                <EditPostFormContainer
                    boardId={boardId}
                    postId={postId}
                    isEditPost={() => toggleEditPost(!isEditPost)}
                />
            ) : (
                ""
            )}
            <h4>{post.title}</h4>
            <a>{post.body}</a>
            <hr />
            <textarea placeholder="comment" />
            {/* add a comment */}
        </li>
    );
};

export default Post;

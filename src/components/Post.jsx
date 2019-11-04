import React, { useState } from "react";
import EditPostForm from "./EditPostForm";
import EditPostFormContainer from "../containers/EditPostFormContainer";
import CommentsContainer from "../containers/CommentsContainer";
import CreateComment from "./CreateComment";

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
            <CreateComment />
            {/* add a comment */}
            <CommentsContainer boardId={boardId} postId={postId} />
        </li>
    );
};

export default Post;

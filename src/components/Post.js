import React from "react";

const Post = ({ post }) => {
    // console.log(post);
    return (
        <li className="Post">
            <button>🖊</button>
            <h4>{post.title}</h4>
            <a>{post.body}</a>

            <hr />
            <textarea placeholder="comment" />
            {/* add a comment */}
        </li>
    );
};

export default Post;

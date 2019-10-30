import React from "react";

const Post = ({ post }) => {
    console.log(post);
    return (
        <li className="Post">
            <h4>{post.title}</h4>
            <a>{post.body}</a>
        </li>
    );
};

export default Post;

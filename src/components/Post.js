import React from "react";

const Post = ({ post }) => {
    // console.log(post);
    return (
        <li>
            <a>{post.title}</a>
        </li>
    );
};

export default Post;

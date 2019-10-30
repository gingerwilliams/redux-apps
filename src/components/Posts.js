import React from "react";
// import Post from "./Post";
import PostContainer from "../containers/PostContainer";
// { posts, boardId }
const Posts = ({ posts, boardId }) => {
    // console.log(props)
    return (
        <div>
            <ul>
                {posts.map(post => (
                    <PostContainer
                        key={post.id}
                        boardId={boardId}
                        postId={post.id}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Posts;

import React, { useState } from "react";
import PostsContainer from "../containers/PostsContainer";
import EditBoardFormContainer from "../containers/EditBoardFormContainer";
import CreatePostContainer from "../containers/CreatePostContainer";

const Board = ({ board }) => {
    const [isEditBoard, toggleEditBoard] = useState(false);
    const [isAddPost, toggleAddPost] = useState(false);

    return (
        <article className="Board">
            <h3>{board.title}</h3>
            <div>{board.summary}</div>
            <button onClick={() => toggleEditBoard(!isEditBoard)}>
                {isEditBoard ? "cancel" : "edit board"}
            </button>
            {isEditBoard ? (
                <EditBoardFormContainer
                    boardId={board.id}
                    isEditBoard={() => toggleEditBoard(!isEditBoard)}
                />
            ) : (
                ""
            )}

            <hr />

            <button onClick={() => toggleAddPost(!isAddPost)}>
                <span>➕</span> Add Post
            </button>
            {isAddPost ? (
                <CreatePostContainer
                    boardId={board.id}
                    isAddPost={() => toggleAddPost(!isAddPost)}
                />
            ) : (
                ""
            )}

            <PostsContainer boardId={board.id} />
        </article>
    );
};

export default Board;

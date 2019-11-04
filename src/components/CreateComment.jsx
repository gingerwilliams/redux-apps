import React, { useState } from "react";

//({ boardId, addComment })
const CreateComment = ({ boardId, postId, addComment }) => {
    //State for form
    const [createCommentForm, setCreateCommentForm] = useState({
        user: "comment.user",
        text: ""
    });

    const [isFocus, toggleIsFocus] = useState(false);

    //Events
    const handleSubmitNewComment = event => {
        event.preventDefault();
        if (createCommentForm.text) {
            addComment(
                boardId,
                postId,
                createCommentForm.user,
                createCommentForm.text
            );
            toggleIsFocus(!isFocus);
            setCreateCommentForm({ user: "comment.user", text: "" });
        }
    };

    const handleChange = () => {
        const { name, value } = event.target;
        setCreateCommentForm({ ...createCommentForm, [name]: value });
    };

    const handlefocus = () => {
        //toggleIsFocus(!isFocus);
        toggleIsFocus(() => {
            return true;
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmitNewComment}>
                <textarea
                    name="text"
                    onChange={handleChange}
                    value={createCommentForm.text}
                    placeholder="comment"
                    onFocus={handlefocus}
                />
                {isFocus ? (
                    <div>
                        <button
                            type="reset"
                            onClick={() => toggleIsFocus(!isFocus)}>
                            cancel
                        </button>
                        <button>comment</button>
                    </div>
                ) : (
                    ""
                )}
            </form>
        </div>
    );
};

export default CreateComment;

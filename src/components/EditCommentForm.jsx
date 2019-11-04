import React, { useState } from "react";
// ({ editPost, isEditPost })
const EditCommentform = ({
    boardId,
    postId,
    commentId,
    comment,
    editComment,
    isEditComment
}) => {
    //console.log(props);

    const [isVisible, toggleVisible] = useState(false);
    const [editCommentForm, setEditCommentForm] = useState({
        //initial state
        text: comment.text,
        user: comment.user
    });

    const handleSubmitEditComment = event => {
        event.preventDefault();
        console.log("edit comment form dispatched", editCommentForm);

        if (editCommentForm.text) {
            //payload
            editComment(
                boardId,
                postId,
                commentId,
                comment.user,
                editCommentForm.text
            );
            //reset form
            setEditCommentForm({ user: comment.user, text: "" });
            //close form
            isEditComment();
        } //TODO add form validation
        return;
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setEditCommentForm({ ...editCommentForm, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmitEditComment}>
                <textarea
                    name="text"
                    onChange={handleChange}
                    value={editCommentForm.text}
                    placeholder="comment"
                />
                <button type="submit">update</button>
            </form>
        </div>
    );
};

export default EditCommentform;

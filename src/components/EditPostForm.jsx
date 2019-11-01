import React, { useState } from "react";
// ({ editPost, isEditPost })
const EditPostForm = ({ post, editPost, isEditPost, boardId, postId }) => {
    //console.log(props);

    const [isVisible, toggleVisible] = useState(false);
    const [editPostForm, setEditPostForm] = useState({
        //initial state
        title: post.title,
        body: post.body
    });

    const handleSubmitEditPost = event => {
        event.preventDefault();
        console.log(editPostForm);

        if (editPostForm.title && editPostForm.body) {
            //payload
            editPost(
                boardId,
                editPostForm.title,
                editPostForm.body,
                post.id,
                post.comments
            );
            //reset form
            setEditPostForm({ title: "", body: "" });
            //close form
            isEditPost();
        } //TODO add form validation
        return;
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setEditPostForm({ ...editPostForm, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmitEditPost}>
                <input
                    onChange={handleChange}
                    name="title"
                    value={editPostForm.title}
                    type="text"
                    placeholder="Title"
                />
                <input
                    onChange={handleChange}
                    name="body"
                    value={editPostForm.body}
                    type="text"
                    placeholder="post body"
                />
                <button type="submit">update</button>
            </form>
        </div>
    );
};

export default EditPostForm;

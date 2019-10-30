import React, { useState } from "react";

//({ addPost, boardId })
const CreatePost = ({ addPost, boardId, isAddPost }) => {
    //console.log(props);
    const [createPostForm, setCreatePostForm] = useState({
        title: "",
        body: ""
    });

    const handleSubmitNewPost = event => {
        event.preventDefault();

        if (createPostForm.title && createPostForm.body) {
            addPost(boardId, createPostForm.title, createPostForm.body);
            setCreatePostForm({ title: "", body: "" });
            isAddPost();
        } //TODO add form validation
        return;
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setCreatePostForm({ ...createPostForm, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmitNewPost}>
                <input
                    onChange={handleChange}
                    name="title"
                    value={createPostForm.title}
                    type="text"
                    placeholder="Title"
                />
                <textarea
                    onChange={handleChange}
                    name="body"
                    value={createPostForm.body}
                    type="text"
                    placeholder="share your thoughts"
                />
                <button type="submit">post</button>
            </form>
        </div>
    );
};

export default CreatePost;

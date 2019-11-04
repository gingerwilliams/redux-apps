import React, { useState } from "react";

//({ boardId, addComment })
const CreateComment = ({ boardId, postId, addComment }) => {
    //console.log(props);
    //State for form
    const [createCommentForm, setCreateCommentForm] = useState({
        user: "comment.user",
        text: ""
    });

    const [isFocus, toggleIsFocus] = useState(false);

    //Events
    const handleSubmitNewComment = event => {
        event.preventDefault();
        addComment(
            boardId,
            postId,
            createCommentForm.user,
            createCommentForm.text
        );
        toggleIsFocus(!isFocus);
        setCreateCommentForm({ user: "comment.user", text: "" });
    };

    const handleChange = () => {
        const { name, value } = event.target;
        setCreateCommentForm({ ...createCommentForm, [name]: value });

        console.log("change");
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

//     //console.log(props);
//     const [createPostForm, setCreatePostForm] = useState({
//         title: "",
//         body: ""
//     });

//     const handleSubmitNewPost = event => {
//         event.preventDefault();

//         if (createPostForm.title && createPostForm.body) {
//             addPost(boardId, createPostForm.title, createPostForm.body);
//             setCreatePostForm({ title: "", body: "" });
//             isAddPost();
//         } //TODO add form validation
//         return;
//     };

//     const handleChange = event => {
//         const { name, value } = event.target;
//         setCreatePostForm({ ...createPostForm, [name]: value });
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmitNewPost}>
//                 <input
//                     onChange={handleChange}
//                     name="title"
//                     value={createPostForm.title}
//                     type="text"
//                     placeholder="Title"
//                 />
//                 <textarea
//                     onChange={handleChange}
//                     name="body"
//                     value={createPostForm.body}
//                     type="text"
//                     placeholder="share your thoughts"
//                 />
//                 <button type="submit">post</button>
//             </form>
//         </div>
//     );
// };

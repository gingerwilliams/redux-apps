import React, { useState } from "react";
// ({ editBoard })
const EditBoardForm = ({ board, editBoard, isEditBoard }) => {
    //console.log(props);

    const [isVisible, toggleVisible] = useState(false);
    const [editBoardForm, setEditBoardForm] = useState({
        title: board.title,
        summary: board.summary
    });

    const handleSubmitEditBoard = event => {
        event.preventDefault();
        if (editBoardForm.title && editBoardForm.summary) {
            //payload
            editBoard(
                editBoardForm.title,
                editBoardForm.summary,
                board.id,
                board.posts
            );
            //reset form
            setEditBoardForm({ title: "", summary: "" });
            //close form
            isEditBoard();
        } //TODO add form validation
        return;
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setEditBoardForm({ ...editBoardForm, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmitEditBoard}>
                <input
                    onChange={handleChange}
                    name="title"
                    value={editBoardForm.title}
                    type="text"
                    placeholder="Title"
                />
                <input
                    onChange={handleChange}
                    name="summary"
                    value={editBoardForm.summary}
                    type="text"
                    placeholder="Summary"
                />
                <button type="submit">update</button>
            </form>
        </div>
    );
};

export default EditBoardForm;

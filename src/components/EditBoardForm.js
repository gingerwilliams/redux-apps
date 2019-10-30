import React, { useState } from "react";
// ({ editBoard })
const EditBoardForm = ({ board, editBoard }) => {
    //console.log(props);
    console.log(board);
    const [isVisible, toggleVisible] = useState(false);
    const [createBoardForm, setCreateBoardForm] = useState({
        title: board.title,
        summary: board.summary
    });

    const handleSubmitEditBoard = event => {
        event.preventDefault();
        if (createBoardForm.title && createBoardForm.summary) {
            editBoard(
                createBoardForm.title,
                createBoardForm.summary,
                board.id,
                board.posts
            );
            setCreateBoardForm({ title: "", summary: "" });
        } //TODO add form validation
        return;
        console.log(editBoard());
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setCreateBoardForm({ ...createBoardForm, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmitEditBoard}>
                <input
                    onChange={handleChange}
                    name="title"
                    value={createBoardForm.title}
                    type="text"
                    placeholder="Title"
                />
                <input
                    onChange={handleChange}
                    name="summary"
                    value={createBoardForm.summary}
                    type="text"
                    placeholder="Summary"
                />
                <button type="submit">update</button>
            </form>
        </div>
    );
};

export default EditBoardForm;

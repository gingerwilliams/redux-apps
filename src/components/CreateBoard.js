import React, { useState } from "react";

const CreateBoard = ({ addBoard }) => {
    const [isVisible, toggleVisible] = useState(false);
    const [createBoardForm, setCreateBoardForm] = useState({
        title: "", //Learn Hooks
        summary: "" //"Hooks let you use state and other React features without writing a class"
    });

    const handleSubmitNewBoard = event => {
        event.preventDefault();
        addBoard(createBoardForm.title, createBoardForm.summary);
        setCreateBoardForm({ title: "", summary: "" });
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setCreateBoardForm({ ...createBoardForm, [name]: value });
    };

    return (
        <div>
            <button onClick={() => toggleVisible(!isVisible)}>New Board</button>
            {!isVisible ? (
                ""
            ) : (
                <form onSubmit={handleSubmitNewBoard}>
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
                    <button type="submit">create new</button>
                </form>
            )}
        </div>
    );
};

export default CreateBoard;

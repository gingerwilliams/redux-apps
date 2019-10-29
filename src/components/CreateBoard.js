import React, { useState } from "react";

const CreateBoard = ({ addBoard }) => {
    const [isVisible, toggleVisible] = useState(false);
    const [newBoard, setNewBoard] = useState([
        {
            title: "Learn Hooks",
            summary:
                "Hooks let you use state and other React features without writing a class"
        }
    ]);
    //initial state in the action
    console.log(addBoard());
    const handleSubmitNewBoard = event => {
        event.preventDefault();
        addBoard("Test Title", "Test Summary");
        console.log("new board");
    };

    const handleChange = event => {
        const target = event.target;
        const value = target.value;

        setNewBoard();

        console.log(value);
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
                        type="text"
                        placeholder="Title"
                    />
                    <input
                        onChange={handleChange}
                        name="summary"
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

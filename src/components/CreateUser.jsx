import React, { useState } from "react";

const CreateUser = ({ createUser }) => {
    // console.log(props);

    //State
    const [user, setUsername] = useState({ name: "" });

    //Events
    const handleSumbitCreateUser = event => {
        event.preventDefault();
        createUser(user.name);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setUsername({ ...user, [name]: value });
    };
    return (
        <form onSubmit={handleSumbitCreateUser}>
            <input
                name="name"
                value={user.name}
                onChange={handleChange}
                type="text"
                placeholder="username"
            />
            <button>sign in</button>
        </form>
    );
};

export default CreateUser;

import React from "react";

export const renderTodos = (item, index) => {
    console.log(item);
    return (
        <li key={index}>
            <p>{item}</p>
        </li>
    );
};

import React, { Component, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./actions/actionCreator";

import { renderTodos } from "./components/renderTodos";

export const App = () => {
    const todo = useSelector(state => state.todo);
    const todoForm = useRef("");
    const text = useRef(""); //input 'initialState'
    const dispatch = useDispatch();

    const handleClick = e => {
        e.preventDefault();
        dispatch(addTodo(text.current.value));
        text.current.value = "";
    };

    return (
        <div>
            <p>Testing UI</p>
            <ul>{todo.map(renderTodos)}</ul>
            <form ref={todoForm} onSubmit={handleClick}>
                <input ref={text} />
                <button onClick={handleClick}>+</button>
            </form>
        </div>
    );
};

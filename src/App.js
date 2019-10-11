import React, { Component, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./actions/actionCreator";

import { renderTodos } from "./components/renderTodos";

export const App = () => {
    const todo = useSelector(state => state.todo);
    const text = useRef(""); //input
    const dispatch = useDispatch();

    return (
        <div>
            <p>Testing UI</p>
            <ul>{todo.map(renderTodos)}</ul>

            <input ref={text} />
            <button onClick={() => dispatch(addTodo(text.current.value))}>
                +
            </button>
        </div>
    );
};

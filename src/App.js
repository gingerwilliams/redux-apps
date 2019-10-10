import React, { Component, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./actions/actionCreator";

import { renderTodos } from "./components/renderTodos";

export const App = () => {
    const todo = useSelector(state => state.todo);
    const text = useRef(null);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Testing UI</p>
            <ul>{todo.map(renderTodos)}</ul>

            <input ref={text} />
            <button onClick={() => dispatch(addTodo(text.current.value))}>
                +
            </button>

            {/* <button onClick={() => dispatch(removeTodo())}>-</button> */}
        </div>
    );
};

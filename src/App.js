import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./actions/actionCreator";

export const App = () => {
    const todo = useSelector(state => state.todo);
    const dispatch = useDispatch();
    return (
        <div>
            <p>Testing UI</p>
            <ul>{todo}</ul>
            <button onClick={() => dispatch(addTodo())}>+</button>
        </div>
    );
};

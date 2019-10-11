import React from "react";
//import { useDispatch } from "react-redux";
import { removeTodo } from "../actions/actionCreator";

export const renderTodos = (item, index) => {
    console.log("renderTodos", item);
    //const dispatch = useDispatch();
    return (
        <li key={index}>
            <p>
                {item}
                <button onClick={() => dispatch(removeTodo(index))}>🗑</button>
            </p>
        </li>
    );
};

//** Error in the Console **/
//Hooks don't mesh very well with the "action creator" pattern.
//The recommendation is to useDispatch() directly
//React Redux now includes its own useSelector and useDispatch
//Hooks that can be used instead of connect

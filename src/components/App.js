import React, { Component } from "react";
import { useSelector } from "react-redux";
//import our action
import { increment, decrement } from "../actions/actionCreator";
//dispatch our action
import { useDispatch } from "react-redux";

const App = () => {
    const counter = useSelector(a => a.counter);
    const isLoggedIn = useSelector(b => b.isLoggedIn);
    const dispatch = useDispatch();

    return (
        <div>
            <p>
                Hello Redux:
                {isLoggedIn ? "Welcome" : "Please Log In"}
            </p>
            <div>
                Counter: {counter}
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
            {/* use react-devtools to see Provider and Context associated with the store  */}
        </div>
    );
};

export default App;

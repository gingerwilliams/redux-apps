import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";

import { Provider } from "react-redux";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//action
const increment = () => {
    return {
        type: "INCREMENT"
    };
};

const decrement = () => {
    return {
        type: "DECREMENT"
    };
};

const isLoggedIn = () => {
    return {
        type: "SIGN_IN"
    };
};

//reducer
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
};

const isLoggedInReducer = (state = false, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return true;
        default:
            return state;
    }
};

//process reducer
const allReducers = combineReducers({
    counterReducer: counterReducer,
    isLoggedInReducer: isLoggedInReducer
});

//devtools
const reduxDevtools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

//store
const store = createStore(allReducers, reduxDevtools);

const Hello = () => {
    //display counter
    const counter = useSelector(state => state.counterReducer);
    const login = useSelector(state => state.isLoggedInReducer);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Hello Redux: {login ? "Welcome Back" : `Please Log In`}</p>
            <p>Counter: {counter}</p>
            <div>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </div>
    );
};

ReactDOM.render(
    <Provider store={store}>
        <Hello />
    </Provider>,
    document.querySelector("#root")
);

///////////

//store : holds the state of out app (global state)

//action : describes what you want to do (your order)

//reducer : describes how your action transforms state into the next state, check witch action you did (process your order)

//dispatch :  sends the action to the reducer or store ?

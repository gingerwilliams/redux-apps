import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

const Hello = () => {
    return <div>Hello Redux</div>;
};

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

//reducer
const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
};

//store
let store = createStore(counter);

//dispay store in the console
store.subscribe(() => console.log(store.getState()));

//dispatch
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

///////////

//store : holds the state of out app (global state)

//action : describes what you want to do (your order)

//reducer : describes how your action transforms state into the next state, check witch action you did (process your order)

//dispatch :  sends the action to the reducer or store ?
ReactDOM.render(<Hello />, document.querySelector("#root"));

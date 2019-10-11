import React, { Component } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/reducers";

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, reduxDevTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

///////////

//action : describes what you want to do (your order)

//reducer : describes how your action transforms state into the next state, check witch action you did (process your order)

//store : holds the state of out app (global state)

//provider : connects our store to our app

//dispatch :  sends the action to the reducer or store ?

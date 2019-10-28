import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(() => console.log("store"));

ReactDOM.render(
    <Provider store={store}>
        <h1>Hello 🗣Holla Board</h1>
    </Provider>,
    document.querySelector("#root")
);

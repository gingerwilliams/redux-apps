import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import { Provider } from "react-redux";
import { rootReducers } from "./reducers/reducers";
import { App } from "./App";

const devTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducers, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

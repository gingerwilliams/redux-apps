import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./reducers/reducers";
import App from "./components/App";
import { localState, saveState } from "./localStorage";

const reduxDevTools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const persistedState = localState(); //getlocalStorage
const store = createStore(rootReducer, persistedState || {}, reduxDevTools);

store.subscribe(() => {
    saveState(store.getState()); //postLocalStorage from store
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);

// https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
// https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
// https://codeburst.io/redux-a-crud-example-abb834d763c9

-   React-Redux 7.1 allows you to use hooks

*   STORE : holds the state of out app (global state)
*   ACTION : describes what you want to do (your order)
    a function that returns an object
*   REDUCER : describes how your action transforms state into the next state, check witch action you did (process your order)
*   DISPATCH : sends the action to the reducer or store ?
*   PROVIDER : connects our store to our app

# Steps

1.  import { createStore } from "redux";
2.  action

    ```
    const increment = () => {
        return {
            type: 'INCREMENT',
        }
    }
    ```

3.  reducer

    ```
    const counter = (initial state, action) => {
        switch(name)
            case name:
                return state + 1;
            default:
                return state;
    }
    ```

4.  let store = createStore(reducer, redux-dev-tools);

    4.1 display store in the console (**_NOT A NECESSARY STEP_**)
    `store.subscribe(() => console.log(store.getState()));`

5.  dispatch

    -   `store.dispatch(action());`
    -   import and dispatch our action
        `import { increment } from "../actions/actionCreator";`
        `import { useDispatch } from "react-redux";`
        `<button onClick={() => dispatch(increment())}>+</button>`

6.  provider: bind data to the app
    `ReactDOM.render(<Provider store={store}><App /></Provider>,document.querySelector("#root"));`

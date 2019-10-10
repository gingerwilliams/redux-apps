-   React-Redux 7.1 allows you to use hooks

*   STORE : holds the state of out app (global state)
*   ACTION : describes what you want to do (your order)
    a function that returns an object
*   REDUCER : describes how your action transforms state into the next state, check witch action you did (process your order)
*   DISPATCH : sends the action to the reducer
*   PROVIDER : connects our store to our app

# Steps

1.  action

    ```
    const increment = () => {
        return {
            type: 'INCREMENT',
        }
    }
    ```

2.  reducer

    ```
    const counter = (initial state, action) => {
        switch(name)
            case name:
                return state + 1;
            default:
                return state
    }
    ```

3.  combine reducers reducers>index
    `const allReducers = combineReducer({counter : counter, logger : logger });`

4.  createStore
    `import { createStore } from "redux";`
    `let store = createStore(allReducers, reduxDevTools);`

5.  provider
    `import { Provider } from "react-redux";`
    `<Provider store={store}><App /></Provider>`

6.  useSelector
    `import { useSelector } from "react-redux";`
    `const counter = useSelector(state => state.counter);`

7.  dispatch
    `store.dispatch(action());`(**_NOT A NECESSARY action_**)
    `import { useDispatch } from "react-redux";`
    `const dispatch = useDispatch();`
    `<button onClick={() => dispatch(increment())}>+</button>`

8.  display store in the console (**_NOT A NECESSARY STEP_**)
    `store.subscribe(() => console.log(store.getState()));`

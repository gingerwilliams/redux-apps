-   React-Redux 7.1 allows you to use hooks
-

*   store : holds the state of out app (global state)

*   action : describes what you want to do (your order)
    a function that returns an object

-   reducer : describes how your action transforms state into the next state, check witch action you did (process your order)

-   dispatch : sends the action to the reducer or store ?

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

    }

    ```

4.  let store = createStore(reducer);

5.  dispatch
    `store.dispatch(action());`

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
    `import { increment } from "./actions/actionCreator";`
    `const dispatch = useDispatch();`
    `<button onClick={() => dispatch(increment())}>+</button>`

8.  display store in the console (**_NOT A NECESSARY STEP_**)
    `store.subscribe(() => console.log(store.getState()));`

**_ HOOKS ISSUE in TODO Branch_**

-   React Redux now includes its own useSelector and useDispatch
-   The recommendation is to useDispatch() directly
-   Hooks don't mesh very well with the "action creator" pattern.

/////

## Connect

1. component

```
    import { connect } from "react-redux";
    import { increment, decrement } from "../actions/actionCreator";

    const Component = () => {
        return (
            //
        )
    }
    const mapStateToProps = state => {
        return {
            counter: state.counter
        };
    };

    export default connect(
        mapStateToProps,
        { increment, decrement }
    )(Component);
```

## persistedState

-   import { localState, saveState } from "./localStorage";
-   const persistedState = localState();

## Subscribe

-   store.subscribe(() => {
    saveState(store.getState()); //postLocalStorage from store
    });

## Fetch

```
fetch(url).then((response)=>{
  if(response.data){
    this.props.dispatch({
    type:"SET_USERS",
    payload: response.data
    })
  }
})
connect()(Component)
```

<!--
https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
https://codeburst.io/redux-a-crud-example-abb834d763c9
-->

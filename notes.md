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

/////

## persistedState

-   import { localState, saveState } from "./localStorage";
-   const persistedState = localState();
-   const store = createStore(rootReducer, persistedState || {}, reduxDevTools);

## Subscribe

-   store.subscribe(() => {
    saveState(store.getState()); //postLocalStorage from store
    });

## Fetch

-   Redux doesn't have a way to handle async code?
-   Use middleware for that Redux Thunk

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

/////

## Immutable

-   Copy Object
    `const original = {a:1, b:2};`
    `const copy = Object.assign({}, original);`
    `const copy = {...original};`
-   Copy Array
    `const original = [1,2,3];`
    `const copy = [1,2,3].slice();`
    `const copy = [...original]`
-   Tells the framework you want to re-render the DOM
-   Extend Array Plus Copy
    `const original = [1,2,3];`
    `const extended = original.concat(4);`
    `const moreExtended = original.concat([4,5]);`
    `const extended = [...original, 4,5 ];`
    `const moreExtended = [...original, ...extended ];`
    `.push() mutates`

## All Redux Methods

-   Create Store
    `const store = createStore(rootReducer, )`
-   Apply Middleware
    `applyMiddleware()`
-   Combine Reducers
    `const rootReducer = combineReducers({example: exampleReducer})`
-   Bind Action Creators
    `bindActionCreators()`
-   Compose
    `compose()`

## All Store Methods

-   dispatch
-   subscribe - fires an event every time there is a state change (react-redux)
-   getState - get current state
-   replaceReducer

## Redux Thunk

-   thunk (noun): a function returned from another function
    ```
        function notAThunk() {
            return function aThunk() {
                console.log('hello i am a thunk');
            }
        }
    ```
-   code to be executed later
-   regular action

    ```
    export const getAllItemsA = () => {
        return {
            type: UPDATE_ALL_ITEMS,
            items
        };
    };
    ```

-   redux thunk version
    ```
    export const getAllItemsB = () => {
        return dispatch => {
            Api.getAll().then(items => {
                dispatch({
                    type: UPDATE_ALL_ITEMS,
                    items
                });
            });
        };
    };
    ```


    <!--
    https://www.youtube.com/watch?v=CVpUuw9XSjY
    https://stackoverflow.com/questions/35305661/where-to-write-to-localstorage-in-a-redux-app
    https://egghead.io/lessons/javascript-redux-persisting-the-state-to-the-local-storage
    https://codeburst.io/redux-a-crud-example-abb834d763c9
    -->

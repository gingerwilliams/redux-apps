export const todoReducer = (state = 0, action) => {
    console.log("todo reducer", state);
    switch (action.type) {
        case "ADD_TODO":
            return state + 1;
        case "REMOVE_TODO":
            return state - 1;
        default:
            return state;
    }
};

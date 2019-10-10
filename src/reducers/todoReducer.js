export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log(action, state);
            return [action.text, ...state];
        case "REMOVE_TODO":
            console.log(action);
            return state;
        default:
            return state;
    }
};

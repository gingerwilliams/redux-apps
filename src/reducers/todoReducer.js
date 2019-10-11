export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            console.log(action, state);
            return [...state, action.text];
        case "REMOVE_TODO":
            console.log(action, state);
            console.log(action.index);
            return [...state].filter((a, i) => i != action.index);
        default:
            return state;
    }
};

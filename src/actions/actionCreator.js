export const addTodo = text => {
    return {
        type: "ADD_TODO",
        text: text
    };
};

export const removeTodo = index => {
    return {
        type: "REMOVE_TODO",
        index: index
    };
};

export const strikeTodo = () => {
    return {
        type: "STRIKE_TODO"
    };
};

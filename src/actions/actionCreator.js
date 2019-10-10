export const addTodo = text => {
    return {
        type: "ADD_TODO",
        text: text
    };
};

export const removeTodo = () => {
    return {
        type: "REMOVE_TODO"
    };
};

export const strikeTodo = () => {
    return {
        type: "REMOVE_TODO"
    };
};

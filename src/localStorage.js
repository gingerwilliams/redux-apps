//get state local storage
export const localState = () => {
    const serializedState = localStorage.getItem("state");
    return JSON.parse(serializedState);
};

//set state to local storage
export const saveState = state => {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
};

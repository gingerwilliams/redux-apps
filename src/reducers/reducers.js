import { combineReducers } from "redux";

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            console.log("INCREMENT");
            return state;
        default:
            return state;
    }
};

const playerReducer = (state = "Player 1", action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    counter: counterReducer,
    player: playerReducer
});

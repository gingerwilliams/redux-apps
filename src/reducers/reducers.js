import { combineReducers } from "redux";

const pointsReducer = (state = [0, 0], action) => {
    switch (action.type) {
        case "INCREMENT_PLAYER":
            console.log("INCREMENT_PLAYER");
            let updatePlayerState = [...state];
            updatePlayerState[0] += 1;
            return updatePlayerState;
        case "INCREMENT_COMPUTER":
            console.log("INCREMENT_COMPUTER");
            let updateComputerState = [...state];
            updateComputerState[1] += 1;
            return updateComputerState;
        case "RESET_POINTS":
            console.log("RESET_POINTS");
            return ([...state] = [0, 0]);
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

const boardReducer = (state = [], action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    points: pointsReducer,
    player: playerReducer
});

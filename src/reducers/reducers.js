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

const boardReducer = (state = ["ready...", "ready...", ""], action) => {
    switch (action.type) {
        case "UPDATE_BOARD":
            let newState = [...state];
            newState[0] = action.playerChoice;
            newState[1] = action.computerChoice;
            newState[2] = action.outcome;
            console.log("UPDATE_BOARD", newState);
            return newState;
        case "RESET_BOARD":
            return ([...state] = ["ready...", "ready..."]);
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    points: pointsReducer,
    player: playerReducer,
    board: boardReducer
});

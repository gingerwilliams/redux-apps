import { useDispatch } from "react-redux";

export const incrementPlayer = () => {
    return {
        type: "INCREMENT_PLAYER"
    };
};

export const incrementComputer = () => {
    return {
        type: "INCREMENT_COMPUTER"
    };
};
export const reset = () => {
    return {
        type: "RESET_POINTS"
    };
};

export const player = name => {
    return {
        type: "PLAYER",
        name: "Player 1"
    };
};

export const updateBoard = (playerChoice, computerChoice, outcome) => {
    return {
        type: "UPDATE_BOARD",
        playerChoice: playerChoice,
        computerChoice: computerChoice,
        outcome: outcome
    };
};

export const resetBoard = (playerChoice, computerChoice) => {
    return {
        type: "RESET_BOARD"
    };
};
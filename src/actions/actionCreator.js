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

export const player = name => {
    return {
        type: "PLAYER",
        name: "Player 1"
    };
};

export const rock = () => {
    return {
        type: "ROCK"
    };
};

export const paper = () => {
    return {
        type: "ROCK"
    };
};

export const scissors = () => {
    return {
        type: "ROCK"
    };
};

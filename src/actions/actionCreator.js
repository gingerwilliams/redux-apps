export const increment = () => {
    return {
        type: "INCREMENT"
    };
};

export const playerName = (name) => {
    return {
        type: "PLAYER_NAME"
        name: name
    };
};

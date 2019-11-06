import { combineReducers } from "redux";

import {
    CREATE_USER,
    FETCH_COINS_SUCCESS,
    FETCH_COINS_PENDING,
    FETCH_COINS_ERROR
} from "../actions/actionCreators";

const userReducer = (users = {}, action) => {
    if (action.type === CREATE_USER) {
        console.log("CREATE_USER");
        const id = `_uid_${Date.now().toString()}`;

        return {
            name: action.payload.name,
            id: id
        };
    }
    return users;
};

const coinsReducer = (coins = [], action) => {
    switch (action.type) {
        case FETCH_COINS_PENDING:
            console.log("...loading");
            return coins;
            break;
        case FETCH_COINS_SUCCESS:
            console.log(action.payload.coins);
            return action.payload.coins;
            break;
        case FETCH_COINS_ERROR:
            console.log(action.payload.error);
            return action.payload.error;
            break;
        default:
            return coins;
    }
};

export const rootReducer = combineReducers({
    user: userReducer,
    coins: coinsReducer
});

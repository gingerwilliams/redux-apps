export const CREATE_USER = "CREATE_USER";
export const FETCH_COINS_PENDING = "FETCH_COINS_PENDING";
export const FETCH_COINS_SUCCESS = "FETCH_COINS_SUCCESS";
export const FETCH_COINS_ERROR = "FETCH_COINS_ERROR";

import { API_KEY_CMC } from "../../config_keys";

export const createUser = (name, id) => {
    return {
        type: CREATE_USER,
        payload: {
            name,
            id
        }
    };
};

export const fetchCoinsPending = () => {
    return {
        type: FETCH_COINS_PENDING
    };
};

export const fetchCoinsSuccess = coins => {
    return {
        type: FETCH_COINS_SUCCESS,
        payload: {
            coins: coins
        }
    };
};

export const fetchCoinsError = error => {
    return {
        type: FETCH_COINS_ERROR,
        payload: {
            error: error
        }
    };
};

//a function that calls another function
export const fetchCoins = () => dispatch => {
    const url = `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY_CMC}`;

    dispatch(fetchCoinsPending());
    fetch(url)
        .then(response => response.json())
        .then(data => {
            dispatch(fetchCoinsSuccess(data.data));
        })
        .catch(err => dispatch(fetchCoinsError(err)));
};

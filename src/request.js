import { API_KEY_CMC } from "../config_keys";
import { fetchCoinsSuccess } from "./actions/actionCreators";

export const fetchCoins = () => {
    const url = `https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY_CMC}`;
    return dispatch => {
        fetch(url)
            .then(response => response.json())
            .then(data => dispatch(fetchCoinsSuccess(data)))
            .catch(err => console.log(err));
    };
};

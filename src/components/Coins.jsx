import React from "react";
import CoinContainer from "../containers/CoinContainer";

const Coins = ({ fetchCoins, coins }) => {
    const handleGetCoins = event => {
        event.preventDefault();
        fetchCoins();
    };
    return (
        <div>
            <button onClick={handleGetCoins}>get coins</button>

            <ul>
                {coins.map(coin => (
                    <CoinContainer coinId={coin.id} />
                ))}
            </ul>
        </div>
    );
};

export default Coins;

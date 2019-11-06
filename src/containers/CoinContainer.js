import Coin from "../components/Coin";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    const coin = state.coins.find(coin => coin.id === ownProps.coinId);
    return {
        coin: coin
    };
};

export default connect(mapStateToProps)(Coin);

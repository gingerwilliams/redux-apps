import Coins from "../components/Coins";
import { connect } from "react-redux";
import { fetchCoins } from "../actions/actionCreators";

const mapStateToProps = state => {
    return {
        coins: state.coins
    };
};

export default connect(
    mapStateToProps,
    { fetchCoins }
)(Coins);

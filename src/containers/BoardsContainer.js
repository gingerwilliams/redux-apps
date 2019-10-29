import Boards from "../components/Boards";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        boards: state.board.ids
    };
};

export default connect(mapStateToProps)(Boards);

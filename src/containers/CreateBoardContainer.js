import CreateBoard from "../components/CreateBoard";
import { connect } from "react-redux";
import { addBoard } from "../actions/actionCreators";

const mapStateToProps = state => {
    return {
        user: state.user.name
    };
};

export default connect(
    mapStateToProps,
    { addBoard }
)(CreateBoard);

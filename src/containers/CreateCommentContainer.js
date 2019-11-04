import CreateComment from "../components/CreateComment";
import { connect } from "react-redux";
import { addComment } from "../actions/actionCreators";

const mapStateToProps = state => {
    return {
        user: state.user.name
    };
};

export default connect(
    mapStateToProps,
    { addComment }
)(CreateComment);

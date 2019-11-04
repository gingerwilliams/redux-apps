import CreatePost from "../components/CreatePost";
import { connect } from "react-redux";
import { addPost } from "../actions/actionCreators";

const mapStateToProps = state => {
    return {
        user: state.user.name
    };
};

export default connect(
    mapStateToProps,
    { addPost }
)(CreatePost);

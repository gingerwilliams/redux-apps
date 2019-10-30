import CreatePost from "../components/CreatePost";
import { connect } from "react-redux";
import { addPost } from "../actions/actionCreators";

export default connect(
    null,
    { addPost }
)(CreatePost);

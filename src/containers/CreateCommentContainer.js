import CreateComment from "../components/CreateComment";
import { connect } from "react-redux";
import { addComment } from "../actions/actionCreators";

export default connect(
    null,
    { addComment }
)(CreateComment);

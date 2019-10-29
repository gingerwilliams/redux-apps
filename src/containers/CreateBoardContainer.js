import CreateBoard from "../components/CreateBoard";
import { connect } from "react-redux";
import { addBoard } from "../actions/actionCreators";

export default connect(
    null,
    { addBoard }
)(CreateBoard);

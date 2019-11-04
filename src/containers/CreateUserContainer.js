import CreateUser from "../components/CreateUser";
import { connect } from "react-redux";
import { createUser } from "../actions/actionCreators";

export default connect(
    null,
    { createUser }
)(CreateUser);

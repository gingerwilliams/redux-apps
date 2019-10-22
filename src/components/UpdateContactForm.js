import React, { useRef } from "react";
import { connect } from "react-redux";
import { updateContact } from "../actions/actionCreator";

const UpdateContactForm = props => {
    //side effect
    const preventDefault = event => {
        event.preventDefault();
    };

    let name = useRef("");
    let mobile = useRef("");

    const handleEditContact = () => {
        if (name.current.value && mobile.current.value) {
            //dispatch action
            props.editContact(name.current.value, mobile.current.value);

            //emtpy UI input
            name.current.value = "";
            mobile.current.value = "";
        } else {
            return;
        }
    };

    return (
        <form onSubmit={preventDefault}>
            <input ref={name} name="name" type="text" placeholder="Name" />
            <input
                ref={mobile}
                name="mobile"
                type="text"
                placeholder="Mobile"
            />
            <button type="button" onClick={handleEditContact}>
                update contact
            </button>
            {/* Create new form for update contct */}
        </form>
    );
};

const mapStateToProps = state => {
    return {
        contact: state.contact
    };
};

export default connect(
    mapStateToProps,
    { updateContact }
)(UpdateContactForm);

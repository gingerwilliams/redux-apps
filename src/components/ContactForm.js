import React, { useRef } from "react";
import { connect } from "react-redux";
import { addContact } from "../actions/actionCreator";

const ContactForm = props => {
    //side effect
    const preventDefault = event => {
        event.preventDefault();
    };

    let name = useRef("");
    let mobile = useRef("");

    const handleAddContact = () => {
        if (name.current.value && mobile.current.value) {
            //dispatch action
            props.addContact(name.current.value, mobile.current.value);

            //emtpy input
            name.current.value = "";
            mobile.current.value = "";
        } else {
            return;
        }
    };

    return (
        <form onSubmit={preventDefault}>
            <input ref={name} type="text" placeholder="Name" />
            <input ref={mobile} type="text" placeholder="Mobile" />
            <button type="button" onClick={handleAddContact}>
                add a contact
            </button>
        </form>
    );
};

export default connect(
    state => ({ contact: state.contact }),
    { addContact }
)(ContactForm);

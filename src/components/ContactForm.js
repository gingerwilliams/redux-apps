import React, { useRef } from "react";
import { connect } from "react-redux";
import { addContact, contactFormValueUpdate } from "../actions/actionCreator";

const ContactForm = props => {
    //side effect
    const preventDefault = event => {
        event.preventDefault();
    };

    let name = useRef(props.form.name);
    let mobile = useRef(props.form.mobile);

    const handleAddContact = () => {
        console.log("props.form.isEdit", props.form.isEdit);
        if (name.current.value && mobile.current.value) {
            //dispatch action
            props.addContact(name.current.value, mobile.current.value);
            props.contactFormValueUpdate("", "", null, false);

            //emtpy UI input
            name.current.value = "";
            mobile.current.value = "";
        } else {
            return;
        }
    };

    const handleChange = () => {
        console.log();
    };

    return (
        <form onSubmit={preventDefault}>
            <input
                ref={name}
                name="name"
                //value={}//if value is set, onChange must be set
                //defaultValue={props.form.name} //only on inital pageload
                //value={props.form.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
            />
            <input
                ref={mobile}
                name="mobile"
                onChange={handleChange}
                //value={value || ""}
                // defaultValue={props.form.mobile}
                type="text"
                placeholder="Mobile"
            />
            <button type="button" onClick={handleAddContact}>
                add a contact
            </button>
        </form>
    );
};

const mapStateToProps = state => {
    return {
        contact: state.contact,
        form: state.form
    };
};

export default connect(
    mapStateToProps,
    { addContact, contactFormValueUpdate }
)(ContactForm);

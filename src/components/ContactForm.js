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
            props.addContact(name.current.value, mobile.current.value, false);

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
                //onChange={handleChange}
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
            {/* Create new form for update contct */}
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
    { addContact }
)(ContactForm);

import React from "react";
import { connect } from "react-redux";
import {
    deleteContact,
    editContact,
    contactFormValueUpdate
} from "../actions/actionCreator";

const styles = {
    background: "#fafafa"
};

const ContactList = props => {
    const handleDelete = index => {
        props.deleteContact(index);
    };
    const handleEdit = (name, mobile, index, isEdit) => {
        //add input values to form state
        props.contactFormValueUpdate(name, mobile, isEdit);
        //props.deleteContact(index);

        //props.editContact();
    };

    return (
        <div style={styles}>
            {props.contact.map((a, index) => (
                <li key={index}>
                    <img src={a.image} width="100" />
                    <span>{a.name}</span>
                    <span>{a.mobile}</span>
                    <button onClick={() => handleDelete(index)}>🗑</button>
                    <button
                        onClick={() =>
                            handleEdit(a.name, a.mobile, index, true)
                        }>
                        ✏️
                    </button>
                </li>
            ))}
        </div>
    );
};

// export default ContactList;
const mapStateToProps = state => {
    return {
        contact: state.contact,
        form: state.form
    };
};

export default connect(
    mapStateToProps,
    { deleteContact, editContact, contactFormValueUpdate }
)(ContactList);

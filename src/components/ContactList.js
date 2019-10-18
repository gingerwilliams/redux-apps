import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../actions/actionCreator";

const styles = {
    background: "#fafafa"
};

const ContactList = props => {
    const handleDelete = index => {
        props.deleteContact(index);
    };
    return (
        <div style={styles}>
            {props.contact.map((a, index) => (
                <li key={index}>
                    <span>{a.name}</span>
                    <span>{a.mobile}</span>
                    <button onClick={() => handleDelete(index)}>🗑</button>
                </li>
            ))}
        </div>
    );
};

// export default ContactList;

export default connect(
    state => ({ contact: state.contact }),
    { deleteContact }
)(ContactList);

import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { deleteContact, editContact } from "../actions/actionCreator";
import UpdateContactForm from "./UpdateContactForm";
import Modal from "./shared/Modal";

const styles = {
    background: "#fafafa"
};

const ContactList = props => {
    const handleDelete = id => {
        props.deleteContact(id);
    };

    const handleEdit = id => {
        props.editContact(id); // handle hide and show of edit form
    };
    return (
        <div style={styles}>
            {/* give a unique id */}
            {props.contact.map((a, index) => (
                <li id={index} key={index}>
                    <img src={a.image} width="100" />
                    <span>{a.name}</span>
                    <span>{a.mobile}</span>
                    {a.isEdit ? (
                        <UpdateContactForm id={a.id} />
                    ) : (
                        <Fragment>
                            <button onClick={() => handleDelete(index)}>
                                🗑
                            </button>
                            <button onClick={() => handleEdit(a.id)}>✏️</button>
                        </Fragment>
                    )}
                </li>
            ))}
        </div>
    );
};

// export default ContactList;
const mapStateToProps = state => {
    return {
        contact: state.contact
    };
};

export default connect(
    mapStateToProps,
    { deleteContact, editContact }
)(ContactList);

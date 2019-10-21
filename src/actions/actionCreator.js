export const addContact = (name, mobile, image) => {
    return {
        type: "ADD_CONTACT",
        name: name,
        mobile: mobile,
        image: image
    };
};

export const deleteContact = index => {
    return {
        type: "DELETE_CONTACT",
        index: index
    };
};

export const editContact = index => {
    return {
        type: "EDIT_CONTACT"
    };
};

export const contactFormValueUpdate = (name, mobile, isEdit) => {
    return {
        type: "CONTACT_FORM_VALUE_UPDATE",
        name: name,
        mobile: mobile,
        isEdit: isEdit
    };
};

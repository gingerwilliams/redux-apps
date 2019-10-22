export const addContact = (name, mobile, image, id) => {
    return {
        type: "ADD_CONTACT",
        name: name,
        mobile: mobile,
        image: image,
        id: id,
        isEdit: false
    };
};

export const deleteContact = id => {
    return {
        type: "DELETE_CONTACT",
        id: id
    };
};

export const editContact = id => {
    return {
        type: "EDIT_CONTACT",
        id: id
    };
};

export const updateContact = id => {
    return {
        type: "UPDATE_CONTACT"
    };
};

// export const contactFormValueUpdate = (name, mobile, isEdit) => {
//     return {
//         type: "CONTACT_FORM_VALUE_UPDATE",
//         name: name,
//         mobile: mobile,
//         isEdit: isEdit
//     };
// };

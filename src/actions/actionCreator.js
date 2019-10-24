export const addContact = (name, mobile, image, id, isEdit) => {
    return {
        type: "ADD_CONTACT",
        name: name,
        mobile: mobile,
        image: image,
        id: id,
        isEdit: isEdit
    };
};

export const deleteContact = id => {
    return {
        type: "DELETE_CONTACT",
        id: id
    };
};

export const editContact = (id, isEdit) => {
    return {
        type: "EDIT_CONTACT",
        id: id,
        isEdit: isEdit
    };
};

export const updateContact = (name, mobile, id, isEdit) => {
    return {
        type: "UPDATE_CONTACT",
        name: name,
        mobile: mobile,
        id: id,
        isEdit: isEdit
    };
};


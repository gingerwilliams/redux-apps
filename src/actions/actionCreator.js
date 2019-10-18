export const addContact = (name, mobile) => {
    return {
        type: "ADD_CONTACT",
        name: name,
        mobile: mobile
    };
};

export const deleteContact = index => {
    return {
        type: "DELETE_CONTACT",
        index: index
    };
};

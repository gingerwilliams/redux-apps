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

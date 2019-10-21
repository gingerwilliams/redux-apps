import { combineReducers, bindActionCreators } from "redux";

const contactReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            console.log("ADD_CONTACT action", action);
            console.log("ADD_CONTACT state", state);

            return [
                ...state,
                {
                    name: action.name,
                    mobile: action.mobile,
                    image: `https://picsum.photos/100/100/?image=${Math.floor(
                        Math.random() * 85
                    )}`
                }
            ];
        case "DELETE_CONTACT":
            console.log("DELETE_CONTACT action", action);
            console.log("DELETE_CONTACT state", state);

            return [...state].filter((a, i) => i != action.index);
        case "EDIT_CONTACT":
            console.log("EDIT_CONTACT action", action);
            console.log("EDIT_CONTACT state", state);
            //target the contact by index
            //[...state].filter((a, i) => i = action.index);

            return state;
        default:
            return state;
    }
};

const formReducer = (
    state = { name: "", mobile: "", isEdit: false },
    action
) => {
    switch (action.type) {
        case "CONTACT_FORM_VALUE_UPDATE":
            console.log("CONTACT_FORM_VALUE_UPDATE", state, action);
            return {
                name: action.name,
                mobile: action.mobile,
                isEdit: action.isEdit
            };

        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    contact: contactReducer,
    form: formReducer
});

// https://mymodernmet.com/this-person-does-not-exist/

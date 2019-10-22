import { combineReducers } from "redux";

const contactReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            console.log("ADD_CONTACT");
            // {/* give a unique id */}
            return [
                ...state,
                {
                    name: action.name,
                    mobile: action.mobile,
                    isEdit: false,
                    image: `https://picsum.photos/100/100/?image=${Math.floor(
                        Math.random() * 85
                    )}`,
                    id: `_${Math.floor(Math.random() * 300)}`
                }
            ];
        case "DELETE_CONTACT":
            console.log("DELETE_CONTACT");
            return [...state].filter((a, i) => i != action.id);
        case "EDIT_CONTACT":
            console.log("EDIT_CONTACT");
            //map state filter by id
            [...state].map(a => {
                // console.log("action", a.id, action.id);
                if (a.id === action.id) {
                    a.isEdit = true;
                } else a.isEdit = false;
            });
            //return editContactForm
            return [...state];
        case "UPDATE_CONTACT":
            console.log("UPDATE_CONTACT");
            //map state filter by id
            return [...state].map(a => {
                if (a.id === action.id) {
                    return {
                        ...a,
                        name: action.name,
                        mobile: action.mobile,
                        isEdit: false
                    };
                } else {
                    return a;
                }
            });

        //return state;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    contact: contactReducer
});

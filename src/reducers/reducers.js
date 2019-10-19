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
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    contact: contactReducer
});

// https://mymodernmet.com/this-person-does-not-exist/

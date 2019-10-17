import { combineReducers, bindActionCreators } from "redux";

const contactReducer = (state = ["ginger"], action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            console.log(state);
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    contact: contactReducer
});

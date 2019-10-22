import { combineReducers, bindActionCreators } from "redux";

const contactReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_CONTACT":
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
            return [...state].filter((a, i) => i != action.id);
        case "EDIT_CONTACT":
            [...state].map(a => {
                // console.log(a);
                // console.log("a.id", a.id);
                // console.log("action", action.id);
                if (a.id === action.id) {
                    a.isEdit = true;
                } else a.isEdit = false;
            });
            return [...state];
        case "UPDATE_CONTACT":
            return [
                ...state.slice(0, action.id), //pull all posts before the one we are changing
                {
                    //...state[action.id],
                    name: action.name,
                    mobile: action.number,
                    image: "https://picsum.photos/100/100/?image=151",
                    id: action.id,
                    isEdit: action.isEdit
                }, //take a copy of target post then update it
                ...state.slice(action.id + 1) //pull all posts after the one we are changing
            ];

        //map state filter by id
        //return editContactForm

        //return state;
        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    contact: contactReducer
});

// https://mymodernmet.com/this-person-does-not-exist/

import React, { Fragment } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";

const App = () => {
    return (
        <Fragment>
            <ContactForm />
            <ContactList />
        </Fragment>
    );
};

export default App;

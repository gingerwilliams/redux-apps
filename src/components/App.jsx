import React from "react";
import Header from "./Header";
import CoinsContainer from "../containers/CoinsContainer";

const App = () => {
    return (
        <div className="Application">
            <Header />
            <CoinsContainer />
        </div>
    );
};

export default App;

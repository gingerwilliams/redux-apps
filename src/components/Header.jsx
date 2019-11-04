import React from "react";
import CreateUserContainer from "../containers/CreateUserContainer";

const Header = () => {
    return (
        <div className="row">
            <header className="col-md-8">
                <h1>🗣Hollar Board</h1>
            </header>
            <div className="col-md-4">
                <CreateUserContainer />
            </div>
        </div>
    );
};

export default Header;

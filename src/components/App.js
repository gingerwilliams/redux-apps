import React from "react";
import Header from "./Header";
import CreateBoardContainer from "../containers/CreateBoardContainer";
import BoardsContainer from "../containers/BoardsContainer";

const App = () => {
    return (
        <div className="Application">
            <Header />
            <CreateBoardContainer />
            <BoardsContainer />
        </div>
    );
};

export default App;

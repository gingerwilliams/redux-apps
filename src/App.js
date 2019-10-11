import React, { Component } from "react";
import { useSelector } from "react-redux";

export const App = () => {
    const player = useSelector(state => state.player);
    const counter = useSelector(state => state.counter);
    console.log(player);
    return (
        <div>
            <h1>
                Hello {player} <span>😃</span>
            </h1>
            <div>You have {counter} Points</div>
        </div>
    );
};

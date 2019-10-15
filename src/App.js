import React, { Component } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    incrementPlayer,
    incrementComputer,
    reset
} from "./actions/actionCreator";

export const App = () => {
    const player = useSelector(state => state.player);
    const points = useSelector(state => state.points);

    const dispatch = useDispatch();

    const computerChoice = () => {
        //console.log(Math.ceil(Math.random() * 3));
        return Math.floor(Math.random() * 3);
    };

    const choices = event => {
        event.preventDefault();
        // pick rock paper scissors
        let player2 = computerChoice();
        let player1 = parseInt(event.target.value);

        console.log("player1 :", player1, "player2 :", player2);
        // build the board
        //dispatch the points
        if (player1 < player2) dispatch(incrementComputer());
        if (player2 < player1) dispatch(incrementPlayer());
        if (player2 === player1) console.log("its a tie !!!!");
    };

    const handleReset = event => {
        event.preventDefault();
        dispatch(reset());
    };

    //determine who won

    //dispatch points

    //if points === 3 winner!!

    return (
        <div>
            <h1>
                Hello {player} <span>😃</span>
            </h1>
            {console.log("UI", points)}
            <div>You have {points[0]} Points</div>
            <div>Computer has {points[1]} Points</div>
            {/* {points[0] === 3 ? "you won!!!" : ""}
            {points[1] === 3 ? "YOU LOST 😢" : ""} */}

            {/* rerender UI with updated state  wont change this is because 
            you are accidentally mutating the original data" */}
            {points[0] === 3 ? (
                <div>
                    <p>You WON!!! 😃</p>
                    <button onClick={handleReset}>Play Again</button>
                </div>
            ) : points[1] === 3 ? (
                <div>
                    <p>You Lost 😢</p>
                    <button onClick={handleReset}>Play Again</button>
                </div>
            ) : (
                <div>
                    <div></div>
                    <h2>1, 2, 3 Shoot...</h2>
                    <form>
                        <button value="0" onClick={choices}>
                            🤜
                        </button>
                        <button value="1" onClick={choices}>
                            ☝️
                        </button>
                        <button value="2" onClick={choices}>
                            ✌️
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

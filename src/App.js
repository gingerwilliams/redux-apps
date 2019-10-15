import React, { Component } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    incrementPlayer,
    incrementComputer,
    updateBoard,
    resetBoard,
    reset
} from "./actions/actionCreator";
import "./App.scss";

export const App = () => {
    const player = useSelector(state => state.player);
    const points = useSelector(state => state.points);
    const board = useSelector(state => state.board);

    const dispatch = useDispatch();

    const computerChoice = () => {
        return Math.floor(Math.random() * 3);
    };

    const choices = event => {
        event.preventDefault();
        // players
        let player2 = computerChoice();
        let player1 = parseInt(event.target.value);

        // build the board
        // dispatch the points
        if (player1 < player2) {
            dispatch(updateBoard(player1, player2, "Yours! 😩"));
            dispatch(incrementComputer());
        }
        if (player2 < player1) {
            dispatch(updateBoard(player1, player2, "Mine! 😛"));
            dispatch(incrementPlayer());
        }
        if (player2 === player1) {
            dispatch(updateBoard(player1, player2, "Its A Tie 😐"));
            console.log("its a tie !!!!");
        }
    };

    //reset the board
    const handleReset = event => {
        event.preventDefault();
        dispatch(resetBoard());
        dispatch(reset());
    };

    return (
        <div>
            <h1 className="header">
                1, 2, 3 Shoot... <span>😃</span>
            </h1>
            <div className="scoreboard black-bg">
                {/* rerender UI with updated state  wont change this is because 
                you are accidentally mutating the original data" */}
                <div className="col-sm-6">
                    {player} has {points[0]} Points
                </div>
                <div className="col-sm-6">Computer has {points[1]} Points</div>
            </div>
            <div className="container">
                {/* if points === 3 winner!! */}
                {points[0] === 3 ? (
                    <div className="player col-sm-12">
                        <p>You WON!!! 😃</p>
                        <button onClick={handleReset}>Play Again</button>
                    </div>
                ) : points[1] === 3 ? (
                    <div className="player col-sm-12">
                        <p>You Lost 😢</p>
                        <button onClick={handleReset}>Play Again</button>
                    </div>
                ) : (
                    <div>
                        <div className="board-main col-sm-12">
                            <div className="player col-sm-6">
                                {board[0] === 0
                                    ? "🤜"
                                    : board[0] === 1
                                    ? "☝️"
                                    : board[0] === 2
                                    ? "✌️"
                                    : board[0]}
                            </div>
                            <div className="computer col-sm-6">
                                {board[1] === 0
                                    ? "🤜"
                                    : board[1] === 1
                                    ? "☝️"
                                    : board[1] === 2
                                    ? "✌️"
                                    : board[1]}
                            </div>
                            <div className="result col-sm-12">{board[2]}</div>
                        </div>
                        <div className="controls col-sm-12">
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
                    </div>
                )}
            </div>
        </div>
    );
};

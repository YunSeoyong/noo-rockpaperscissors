import React, { Component } from "react";

export default class ScoreBoardClass extends Component {
    render() {
        return (
            <div className="board">
                <div className="boardBox win">
                    <p className="title">Win</p>
                    <p>{this.props.userWin}</p>
                </div>
                <div className="boardBox lose">
                    <p className="title">Lose</p>
                    <p>{this.props.computerWin}</p>
                </div>
            </div>
        );
    }
}

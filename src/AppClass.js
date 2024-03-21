import React, { Component } from "react";
import './App.css'
import BoxClass from "./components/BoxClass";
import ScoreBoardClass from "./components/ScoreBoardClass";

const choice = {
    scissors: {
        name: "Scissors",
        img: "https://assets.katogroup.eu/i/katogroup/VT8-0919-24_02_victorinox",
    },
    rock: {
        name: "Rock",
        img: "https://m.media-amazon.com/images/I/51rOMX5z40L.jpg",
    },
    paper: {
        name: "Paper",
        img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
    },
};

export default class AppClass extends Component {

    constructor(props){
        super(props);
        this.state={
            userSelect: null,
            computerSelect: null,
            result: "",
            computerResult: "",
            userWin: 0,
            computerWin: 0,
        }
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();

        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice),
            computerResult: this.judgement(computerChoice, choice[userChoice])
        })
        this.changeScore(this.judgement(choice[userChoice], computerChoice));
    };

    randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];

        return choice[final];
    };

    changeScore = (result) => {
        if (result === "Win") {
            this.setState({
                userWin: this.state.userWin + 1
            });
        } else if (result === "Lose") {
            this.setState({
                computerWin: this.state.computerWin + 1
            });
        }
    };

    judgement = (user, computer) => {
        if (user.name === computer.name) {
            return "draw";
        } else if (user.name === "Rock") {
            return computer.name === "Scissors" ? "Win" : "Lose";
        } else if (user.name === "Scissors") {
            return computer.name === "Paper" ? "Win" : "Lose";
        } else if (user.name === "Paper") {
            return computer.name === "Rock" ? "Win" : "Lose";
        }
    };

    handleReset = () => {
        this.setState({
            userSelect: null,
            computerSelect: null,
            result: "",
            computerResult: "",
            userWin: 0,
            computerWin: 0,
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Rock Paper Scissors!</h1>
                <ScoreBoardClass userWin={this.state.userWin} computerWin={this.state.computerWin} />
                <button className="reset" onClick={this.handleReset}>
                    RESET
                </button>
                <div className="main">
                    <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
                    <BoxClass
                        title="Computer"
                        item={this.state.computerSelect}
                        result={this.state.computerResult}
                    />
                </div>
                <div className="main">
                    <button onClick={() => this.play("rock")}>
                        {choice.rock.name}
                    </button>
                    <button onClick={() => this.play("paper")}>
                        {choice.paper.name}
                    </button>
                    <button onClick={() => this.play("scissors")}>
                        {choice.scissors.name}
                    </button>
                </div>
            </div>
        );
    }
}

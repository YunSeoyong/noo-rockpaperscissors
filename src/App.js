import { useEffect, useState } from "react";

import "./App.css";
import Box from "./components/Box";
import ScoreBoard from "./components/ScoreBoard";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼 클릭 => 클릭 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템을 선택.
// 5. 3, 4의 결과를 가지고 누가 이겼는지 승패를 가림.
// 6. 승패 결과에 따라 테두리 색 바뀜. (이김-초록, 짐-빨강, 비김-검정)

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

function App() {
    const [userSelect, setUserSelect] = useState(null);
    const [computerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState("");
    const [computerResult, setComputerResult] = useState("");
    const [userWin, setUserWin] = useState(0);
    const [computerWin, setComputerWin] = useState(0);

    const play = (userChoice) => {
        setUserSelect(choice[userChoice]);
        let computerChoice = randomChoice();
        setComputerSelect(computerChoice);
        setResult(judgement(choice[userChoice], computerChoice));
        setComputerResult(judgement(computerChoice, choice[userChoice]));
        changeScore(judgement(choice[userChoice], computerChoice));
    };

    const randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];

        return choice[final];
    };

    const changeScore = (result) => {
        if (result === "Win") {
            setUserWin(userWin + 1);
        } else if (result === "Lose") {
            setComputerWin(computerWin + 1);
        }
    };

    const judgement = (user, computer) => {
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

    const handleReset = () => {
        setUserWin(0);
        setComputerWin(0);
        setUserSelect(null);
        setComputerSelect(null);
        setResult("");
        setComputerResult("");
    };

    return (
        <div className="App">
            <h1>Rock Paper Scissors!</h1>
            <ScoreBoard userWin={userWin} computerWin={computerWin} />
            <button className="reset" onClick={handleReset}>
                RESET
            </button>
            <div className="main">
                <Box title="You" item={userSelect} result={result} />
                <Box
                    title="Computer"
                    item={computerSelect}
                    result={computerResult}
                />
            </div>
            <div className="main">
                <button onClick={() => play("rock")}>{choice.rock.name}</button>
                <button onClick={() => play("paper")}>
                    {choice.paper.name}
                </button>
                <button onClick={() => play("scissors")}>
                    {choice.scissors.name}
                </button>
            </div>
        </div>
    );
}

export default App;


const hSelection = document.getElementById("h-selection");
const hScore = document.getElementById("h-score");

const cSelection = document.getElementById("c-selection");
const cScore = document.getElementById("c-score");

const getResult = document.getElementById("result");
function playGame(hMove) {
    const computerMove = cMove();
    hSelection.innerText = hMove;
    cSelection.innerText = computerMove;

    if (computerMove == hMove) {
        getResult.innerText = "It's a Tie!";
    }
    else if (
        (hMove === "Rock" && computerMove === "Scissor") ||
        (hMove === "Paper" && computerMove === "Rock") ||
        (hMove === "Scissor" && computerMove === "Paper")
    ) {
        getResult.innerText = "You Won!";
        const humanScore = parseInt(hScore.innerText) + 1;
        hScore.innerText = humanScore;
        if (humanScore == 10) {
            getResult.innerText = "You Won this battle!";
            hScore.innerText = "0";
            cScore.innerText = "0";
            setTimeout(() => {
                getResult.innerText = "";
            }, 2000);

        }
    }
    else {
        getResult.innerText = "You Lose! Try again";
        const computerScore = parseInt(cScore.innerText) + 1;
        cScore.innerText = computerScore;
        if (computerScore == 10) {
            getResult.innerText = "You Lose this battle!";
            hScore.innerText = "0";
            cScore.innerText = "0";
            setTimeout(() => {
                getResult.innerText = "";
            }, 2000);

        }
    }


}

function cMove() {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum == 1) {
        return "Rock";
    }
    else if (randomNum == 2) {
        return "Paper";
    }
    else {
        return "Scissor";
    }

}
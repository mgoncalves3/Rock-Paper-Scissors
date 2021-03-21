let playerScoreDisplay = document.querySelector("#player-score");
let computerScoreDisplay = document.querySelector("#computer-score");
let gameText = document.querySelector('#game-result');
let playerScore = 0;
let computerScore = 0;
let playerOption;
let computerOption;

function computerChoice() {
    let arr = ["rock", "paper", "scissors"];

    return arr[Math.floor(Math.random() * (2 - 0 + 1) + 0)];
}

let playBtns = document.querySelectorAll('img');

playBtns.forEach(button => {
    button.addEventListener('click', () => {
        playerOption = button.id;
        computerOption = computerChoice();
        let gameResult = game(playerOption, computerOption);
        updateScore(gameResult);
        setTimeout(declareWinner, 200);
    })
})

function game(player, computer = computerChoice()) {
    
    if (player === computer) {
        return "draw";
    }
    if (player === "rock" && computer === "paper") {return 1};
    if (player === "rock" && computer === "scissors") {return 0};
    if (player === "paper" && computer === "rock") {return 0};
    if (player === "paper" && computer === "scissors") {return 1};
    if (player === "scissors" && computer === "rock") {return 1};
    if (player === "scissors" && computer === "paper") {return 0};
}

function updateScore(result) {

    if (result === 0) {
        playerScore++;
        playerScoreDisplay.textContent = `${playerScore}`;
        gameText.textContent = `${playerOption.toUpperCase()} beats ${computerOption.toUpperCase()}. You win!`;
    }
    if (result === 1) {
        computerScore++;
        computerScoreDisplay.textContent = `${computerScore}`;
        gameText.textContent = `${computerOption.toUpperCase()} beats ${playerOption.toUpperCase()}. Computer wins.`;
    }
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    computerScoreDisplay.textContent = 0;
    playerScoreDisplay.textContent = 0;
    gameText.textContent = `Game was reset`;
}

let resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener('click', () => {
    reset();
});

function declareWinner () {
    if (playerScoreDisplay.textContent == 5) {
        alert('You won!');
        reset();
    }
    if (computerScoreDisplay.textContent == 5) {
        alert('Computer wins.');
        reset();
    }
}
let playerScoreDisplay = document.querySelector("#player-score");
let computerScoreDisplay = document.querySelector("#computer-score");
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

    })
})

function game(player, computer = computerChoice()) {
    
    if (player === computer) {
        return "draw";
    }
    if (player === "rock" && computer === "paper") {return "computer"};
    if (player === "rock" && computer === "scissors") {return "player"};
    if (player === "paper" && computer === "rock") {return "player"};
    if (player === "paper" && computer === "scissors") {return "computer"};
    if (player === "scissors" && computer === "rock") {return "computer"};
    if (player === "scissors" && computer === "paper") {return "player"};
}

function updateScore(result) {
    let gameText = document.querySelector('#game-result');

    if (result === "player") {
        playerScore++;
        gameText.textContent = `${playerOption.toUpperCase()} beats ${computerOption.toUpperCase()}. You win!`;
        playerScoreDisplay.textContent = `${playerScore}`;
    }
    if (result === "computer") {
        computerScore++;
        gameText.textContent = `${computerOption.toUpperCase()} beats ${playerOption.toUpperCase()}. Computer wins.`;
        computerScoreDisplay.textContent = `${computerScore}`;
    }
}
const options = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
     return options[Math.floor(Math.random() * 3)];
}


function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors");
}



function playRound(humanOption, computerOption) {
    switch(humanOption.toLowerCase()) {
        case "scissors":
            if (computerOption.toLowerCase() === "paper") {
                humanScore++;
            } else if (computerOption.toLowerCase() === "rock") {
                computerScore++;
            }
            break;
        case "rock":
            if (computerOption.toLowerCase() === "scissors") {
                humanScore++;
            } else if (computerOption.toLowerCase() === "paper") {
                computerScore++;
            }
            break;
        
        case "paper":
            if (computerOption.toLowerCase() === "rock") {
                humanScore++;
            } else if (computerOption.toLowerCase() === "scissors") {
                computerScore++;
            }
            break;
    }
}


// let computerChoice = getComputerChoice();
// let humanChoice = getHumanChoice();

// console.log(humanScore);
// console.log(computerScore);

// playRound(humanChoice, computerChoice);

// console.log(humanScore);
// console.log(computerScore);


function playGame(rounds=5) {
    if (rounds <= 0) {
        if (humanScore > computerScore) {
            return "You Win";
        } else if (humanScore < computerScore) {
            return "Computer Wins";
        } else {
            return "Tie";
        }

    } else{
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        console.log(`computer picks ${computerChoice} computer score: ${computerScore}`);
        console.log(`you picked ${humanChoice} your score ${humanScore}`)
        return playGame(rounds - 1);
    }
}

console.log(playGame(5));
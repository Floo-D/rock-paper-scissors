function computerPlay() {
    const action = ["rock", "paper", "scissors"];
    return action[Math.floor(Math.random() * 3)];
}

/*function playRound(playerSelection, computerSelection) {
    const choice = playerSelection.toLowerCase();
    if(choice === "rock") {
        if(computerSelection === "paper") {
            console.log("You Lose! Paper beats Rock");
        } if(computerSelection === "scissors") {
            console.log("You Win! Rock beats Scissors");
        } else {
            console.log("It's a Draw!...");
        }
    } else if(choice === "paper") {
        if(computerSelection === "scissors") {
            console.log("You Lose! Scissors beats Paper");
        } else if(computerSelection === "rock"){
            console.log("You Win! Paper beats Scissors");
        } else {
            console.log("It's a Draw!...");
        }
    } else {
        if(computerSelection === "rock") {
            console.log("You Lose! Rock beats Scissors");
        } else if(computerSelection === "paper") {
            console.log("You Win! Scissors beats paper");
        } else {
            console.log("It's a Draw!...");
        }
    }
} */

function playRound(playerSelection, computerSelection) {
    const choice = playerSelection.toLowerCase();
    if(choice === computerSelection) {
        return "It's a Draw!...";
    } else if(choice === "paper") {
        return computerSelection === "rock" ? "You Win! Paper beats Rock" : "You Lose! Scissors beats Paper";
    } else if(choice === "rock") {
        return computerSelection === "scissors" ? "You Win! Rock beats Scissors" : "You Lose! Paper beats Rock";
    } else {
        return computerSelection === "paper" ? "You Win! Scissors beats Paper" : "You Lose! Rock beats Scissors";
    }
}

function game() {
    return;
}
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
    let playerPoints = 0;
    let computerPoints = 0;
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt(`ROUND ${i + 1} : Rock/Paper/Scissors`, "rock");
        let computerChoice = computerPlay();
        let result = playRound(playerChoice, computerChoice);
        switch(result.substr(4, 4)){
            case "Win!":
                playerPoints++;
                break;
            case "Lose":
                computerPoints++;
                break;
        }
        console.log(`---------------------ROUND ${i + 1}---------------------\n`);
        console.log(result);
        console.log(`Player: ${playerPoints} point(s).\nComputer: ${computerPoints} point(s).`);
        console.log("-------------------------------------------------\n");
    }
    console.clear();
    console.log(`---------------------!GAME OVER!---------------------\n`);
    console.log(`Player: ${playerPoints} point(s).\nComputer: ${computerPoints} point(s).`);
    if(playerPoints === computerPoints){
        console.log("It's a Draw.");
    } else if(playerPoints > computerPoints){
        console.log("Congratulations, you win the game!");
    } else {
        console.log("Sorry, you lose the game...")
    }
    console.log("-------------------------------------------------\n");
}
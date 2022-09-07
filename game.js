const choice = ["rock", "paper", "scissors"];

function getComputerChoice () {
    return choice[Math.floor(Math.random()*choice.length)];  
}
console.log(getComputerChoice(choice));

const computerSelection = getComputerChoice();
console.log(computerSelection);



function playRound () {
    const playerChoice = prompt("Rock, Paper, or Scissors?");
    const playerSelection = playerChoice.toLowerCase();
    while (playerSelection === "rock") {
        if (computerSelection === "rock")
            console.log("Its a tie!");
        else if (computerSelection === "scissors")
            console.log("Scissors, you win!");
        else if (computerSelection === "paper")
            console.log("Paper, you lose!");
        break
    }
    while (playerSelection === "paper") {
        if (computerSelection === "rock")
            console.log("Rock, you win!");
        else if (computerSelection === "scissors")
            console.log("Scissors, you lose!");
        else if (computerSelection === "paper")
            console.log("Its a tie!");
        break
    }
    while (playerSelection === "scissors") {
        if (computerSelection === "rock")
            console.log("Rock, you lose!");
        else if (computerSelection === "scissors")
            console.log("Its a tie!");
        else if (computerSelection === "paper")
            console.log("Paper, you win!");
        break
    }
    


}


function playGame(playRound) {
    for (let i = 0; i < 5; i++) {
        
    }

}
const choice = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    return choice[Math.floor(Math.random()*choice.length)];  
}
console.log(getComputerChoice(choice));

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerSelection);


function playRound () {
    while (playerSelection === "Rock") {
        if (computerSelection === "Rock")
            console.log("Its a tie!");
        else if (computerSelection === "Scissors")
            console.log("Scissors, you win!");
        else if (computerSelection === "Paper")
            console.log("Paper, you lose!");
        break
    }
    


}


function playGame(playRound) {
    for (let i = 0; i < 5; i++) {
        
    }

}
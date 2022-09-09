const choice = ["rock", "paper", "scissors"];



function playRound () {
    function getComputerChoice () {
        return choice[Math.floor(Math.random()*choice.length)];  
    }
    const computerSelection = getComputerChoice();
    const playerChoice = prompt("Rock, Paper, or Scissors?");
    const playerSelection = playerChoice.toLowerCase();
    while (playerSelection === "rock") {
        if (computerSelection === "rock") {
            playerScore = (x + 0);
            console.log("Its a tie!");}
        else if (computerSelection === "scissors"){
            playerScore = (x + 1);
            console.log("Scissors, you win!");}
        else if (computerSelection === "paper"){
            computerScore = (n + 1);
            console.log("Paper, you lose!");}
        break
    }
    while (playerSelection === "paper") {
        if (computerSelection === "rock"){
            playerScore = (x + 1);
            console.log("Rock, you win!");}
        else if (computerSelection === "scissors"){
            computerScore = (n + 1);
            console.log("Scissors, you lose!");}
        else if (computerSelection === "paper"){
            playerScore = (x + 0);
            console.log("Its a tie!");}
        break
    }
    while (playerSelection === "scissors") {
        if (computerSelection === "rock"){
            computerScore = (n + 1);
            console.log("Rock, you lose!");}
        else if (computerSelection === "scissors"){
            playerScore = (x + 0);
            console.log("Its a tie!");}
        else if (computerSelection === "paper"){
            playerScore = (x + 1);
            console.log("Paper, you win!");}
        break
    }
}
let x = 0;
let n = 0;
let playerScore = x;
let computerScore = n;

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
        
    }
    if (playerScore > computerScore)
        console.log("Win for the users!");
    else if (computerScore > playerScore)
        console.log("Computer wins!");
    else if (playerScore = computerScore)
        console.log("Its a tie!");


}
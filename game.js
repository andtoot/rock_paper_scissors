const choice = ["rock", "paper", "scissors"];

const buttons = document.querySelector('#buttons');
const rock = document.querySelector('#rock');
rock.addEventListener('click', getPlayerChoice);
const paper = document.querySelector('#paper');
paper.addEventListener('click', getPlayerChoice2);
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', getPlayerChoice3);
buttons.addEventListener('click', playRound);

var val;
var userChoice;
function getPlayerChoice() {
    if (document.querySelector('#rock').clicked !== false) {
        userChoice = "rock";

    }
    
    return userChoice;
};

function getPlayerChoice2() {
    if (document.querySelector('#paper').clicked !== false) {
        userChoice = "paper";

    }
    
    return userChoice;
};

function getPlayerChoice3() {
    if (document.querySelector('#scissors').clicked !== false) {
        userChoice = "scissors";

    }
    
    return userChoice;
};

var x = 0;
var n = 0;

function playRound () {
    function getComputerChoice () {
        return choice[Math.floor(Math.random()*choice.length)];  
    }
    const computerSelection = getComputerChoice();
    const playerSelection = userChoice;
    let playerScore = x;
    let computerScore = n;
    x = playerScore + 0;
    n = computerScore + 0;
    const c = document.getElementById("comp");
    const p = document.getElementById("play");
    if (x < 5 && n < 5) {
        while (playerSelection === "rock") {
            if (computerSelection === "rock") {
                alert("Its a tie!");
                console.log(p);}
            else if (computerSelection === "scissors"){
                playerScore = (x + 1);
                x = playerScore;
                alert("Scissors, you win!");
                p.textContent = playerScore.toString();
                console.log(p);}
            else if (computerSelection === "paper"){
                computerScore = (n + 1);
                n = computerScore;
                alert("Paper, you lose!");
                c.textContent = computerScore.toString();
                console.log(c);}
            break;

        
        }
        while (playerSelection === "paper") {
            if (computerSelection === "rock"){
                playerScore = (x + 1);
                x = playerScore;
                alert("Rock, you win!");
                p.textContent = playerScore.toString();
                console.log(p);}
            else if (computerSelection === "scissors"){
                computerScore = (n + 1);
                n = computerScore;
                alert("Scissors, you lose!");
                c.textContent = computerScore.toString();
                console.log(c);}
            else if (computerSelection === "paper"){
                alert("Its a tie!");}
            break;
        }
        while (playerSelection === "scissors") {
            if (computerSelection === "rock"){
                computerScore = (n + 1);
                n = computerScore;
                alert("Rock, you lose!");
                c.textContent = computerScore.toString();
                console.log(c);}
            else if (computerSelection === "scissors"){
                alert("Its a tie!");}
            else if (computerSelection === "paper"){
                playerScore = (x + 1);
                x = playerScore;
                alert("Paper, you win!");
                p.textContent = playerScore.toString();
                console.log(p);}
            break;
        }
    return;
    }
    else if (x = 5) {
        alert("Win for the users!");
        playerScore = 0;
        computerScore = 0;
        x = 0;
        n = 0;
        p.textContent = playerScore.toString();
        c.textContent = computerScore.toString();
    return;
    }
    else if (n = 5) {
        alert("Computer wins!");
        playerScore = 0;
        computerScore = 0;
        x = 0;
        n = 0;
        p.textContent = playerScore.toString();
        c.textContent = computerScore.toString();
    return;
    }
}


// choice options
const choices = ["rock", "paper", "scissors"];

// score tracker
let wins = 0;
let losses = 0;
let ties = 0;

console.log("Wins: " + wins, "Losses: " + losses, "Ties: " + ties)


// random number generator 
const choiceNumber = Math.floor(Math.random() * choices.length);

// random number to array value
console.log(choices[choiceNumber]);

// player interaction
let playerChoice = prompt("rock, paper, or scissors");

// game logic

if (playerChoice.toLowerCase() === choices[choiceNumber]) {
    ties = ties + 1;
    alert("tie!");
} else if (playerChoice.toLowerCase() == "rock") {
    if (choices[choiceNumber] == "paper") {
        losses = losses + 1;
        alert("you loser!")
    } else {
        wins = wins + 1;
        alert("winner!")
    }
} else if (playerChoice.toLowerCase() == "paper") {
    if (choices[choiceNumber] == "scissors") {
        losses = losses + 1;
        alert("you loser!")
    } else {
        wins = wins + 1;
        alert("winner!")
    }
} else if (playerChoice.toLowerCase() == "Scissors") {
    if (choices[choiceNumber] == "rock") {
        losses = losses + 1;
        alert("you loser!")
    } else {
        wins = wins + 1;
        alert("winner!")
    }
};

// Score Printout 
alert("Here's The Score:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)

// play again 
let playAgain = confirm("play again?");

if (playAgain === true) {
    alert("still working on that")
} else {
    alert("good I don't know how to code the rest LOL")
};



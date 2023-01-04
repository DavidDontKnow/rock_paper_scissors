
// choice options
const choices = ["rock", "paper", "scissors"]

// random number generator 
const choiceNumber = Math.floor(Math.random() * choices.length);

// random number to array value
console.log(choices[choiceNumber])

// player interaction
let playerChoice = prompt("rock, paper, or scissors")

console.log(playerChoice.toLowerCase())

// game logic
if (playerChoice.toLowerCase() === choices[choiceNumber]) {
    alert("tie!");
} else if (playerChoice.toLowerCase() == "rock") {
    if (choices[choiceNumber] == "paper") {
        alert("you loser!")
    } else {
        alert("winner!")
    }
} else if (playerChoice.toLowerCase() == "paper") {
    if (choices[choiceNumber] == "scissors") {
        alert("you loser!")
    } else {
        alert("winner!")
    }
} else if (playerChoice.toLowerCase() == "Scissors") {
    if (choices[choiceNumber] == "rock") {
        alert("you loser!")
    } else {
        alert("winner!")
    }
}



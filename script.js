const choices = ["rock", "paper", "scissors"]


const choiceNumber = Math.floor(Math.random() * choices.length);
console.log(choices[choiceNumber])


let playerChoice = prompt("rock, paper, or scissors")

if (playerChoice.toLowerCase() === "rock") {
    alert("You chose: Rock")
}


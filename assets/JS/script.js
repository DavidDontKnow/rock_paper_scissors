
// score tracker
let wins = 0;
let losses = 0;
let ties = 0;

// options
const choices = ["rock", "paper", "scissors"];

// game 
function playerMove() {

    // player option
    let playerPick = prompt("rock, paper, or scissors? (type it in)");
    playerPick = playerPick.toLowerCase();

    // CPU random number gen
    let cpuNumber = Math.floor(Math.random() * choices.length);

    // parse to array value
    let cpuPick = choices[cpuNumber];
    console.log(cpuPick);

    // inform player of CPU pick
    alert("CPU chose " + cpuPick);

    // game logic
    if (playerPick === cpuPick) {
        ties++;
        alert("It's a Tie! 👔")
    }
    else if (playerPick === "rock" && cpuPick === "paper" ||
        playerPick === "paper" && cpuPick === "scissors" ||
        playerPick === "scissors" && cpuPick === "rock"
    ) {
        losses++;
        alert("You Lost 😔");
    } else {
        wins++;
        alert("You Win! 🎉");
    }

    // play again 
    alert("Here's The Score:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);
    const playMore = confirm("Want to play again?")
    if (playMore) {
        playerMove();
    }
}

// first time game 
playerMove()

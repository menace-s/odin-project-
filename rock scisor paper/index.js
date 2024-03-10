const table = ["rock", "paper", "scisor"];
const button = document.querySelectorAll(".btn");
const displayScore=document.querySelector(".displayScore");
const displayVictory=document.querySelector(".displayVictory");
let computerChoice;
let userChoice;
let scoreUser = 0,
  scoreComputer = 0;

// return the computer choice
function getComputerChoice() {
  let rand = Math.floor(Math.random() * table.length);
  var rValue = table[rand];
  return rValue;
}

function determineWinner(scoreUser, scoreComputer) {
  if (scoreUser == 5) {
    displayVictory.textContent='Victory'
    return "Victory";
  } else if (scoreComputer == 5) {
    displayVictory.textContent='Failure'
    return "Failure";
  }
}

// function which consists in making a round
function playRound(userChoice, computerChoice) {
  displayVictory.textContent=""
  userChoice = userChoice.toLowerCase();
  if (userChoice === computerChoice) {
    console.log("tie")
  } else if (
    (userChoice === "rock" && computerChoice === "scisor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scisor" && computerChoice === "paper")
  ) {
    scoreUser += 1;
    console.log(determineWinner(scoreUser,scoreComputer))
    console.log(scoreUser + " " + scoreComputer);
    // return "victory";
  } else {
    scoreComputer += 1;
    console.log(determineWinner(scoreUser,scoreComputer))
    console.log(scoreUser + " " + scoreComputer);
    // return "failure";
  }
  displayScore.textContent=`${scoreUser} - ${scoreComputer}`
}


button[0].addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
button[1].addEventListener("click", () => {
  playRound("scisor", getComputerChoice());
});
button[2].addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

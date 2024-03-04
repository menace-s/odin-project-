const table = ["rock", "paper", "scissor"];
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

// function which consists in making a round
function playRound(userChoice, computerChoice) {
  userChoice = userChoice.toLowerCase();
  if (userChoice === computerChoice) {
    return "Equality !";
  } else if (
    (userChoice === "rock" && computerChoice === "scissor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissor" && computerChoice === "paper")
  ) {
    return "victory";
  } else {
    return "failure";
  }
}

// function that consists in going 5 rounds and recovering the score
function playGame() {
  // use of for for all 5 rounds
  for (let i = 0; i < 5; i++) {
    let userChoice = prompt();
    let result;
    result = playRound(userChoice, getComputerChoice());
    switch (result) {
      case "victory":
        console.log("round won");
        scoreUser += 1;
        break;
      case "failure":
        console.log("round failure");
        scoreComputer += 1;
        break;
      case "Equality !":
        console.log("Equality !");
    }
  }
  // comparison of score values
  console.log(scoreUser);
  if (scoreUser > scoreComputer) {
    console.log(`you won your score is ${scoreUser} over 5 rounds`);
  } else if (scoreComputer > scoreUser) {
    console.log(`vos avez perdu votre score est ${scoreUser} sur 5 round`);
  } else {
    console.log(
      `Tie! Your score is ${scoreUser} and the computer's is ${scoreComputer}.`
    );
  }
}

playGame();

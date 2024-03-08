const table = ["rock", "paper", "scisor"];
const button = document.querySelectorAll(".btn");
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
  if (scoreUser > 0 && scoreUser%5 == 0) {
    return "Victory";
  } else if (scoreComputer > 0 && scoreComputer%5 == 0) {
    return "Failure";
  }
}

// function which consists in making a round
function playRound(userChoice, computerChoice) {
  userChoice = userChoice.toLowerCase();
  if (userChoice === computerChoice) {
    
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
// function that consists in going 5 rounds and recovering the score
// function playGame() {
//   // use of for for all 5 rounds
//   for (let i = 0; i < 5; i++) {
//     let userChoice = prompt();
//     let result;
//     result = playRound(userChoice, getComputerChoice());
//     switch (result) {
//       case "victory":
//         console.log("round won");
//         scoreUser += 1;
//         break;
//       case "failure":
//         console.log("round failure");
//         scoreComputer += 1;
//         break;
//       case "Equality !":
//         console.log("Equality !");
//     }
//   }
//   // comparison of score values
//   console.log(scoreUser);
//   if (scoreUser > scoreComputer) {
//     console.log(`you won your score is ${scoreUser} over 5 rounds`);
//   } else if (scoreComputer > scoreUser) {
//     console.log(`vos avez perdu votre score est ${scoreUser} sur 5 round`);
//   } else {
//     console.log(
//       `Tie! Your score is ${scoreUser} and the computer's is ${scoreComputer}.`
//     );
//   }
// }

// playGame();

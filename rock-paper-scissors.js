
let computerChoice = "";
let playerChoice = "";
const gameChoices = ["rock", "paper", "scissors"]


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = gameChoices[randomNumber];
  return(computerChoice);
}

function getPlayerChoice() {
  let i = 1

  while (i = 1) {
    playerChoice = prompt("Do you choose Rock, Paper or Scissors?").toLowerCase();
    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
      alert ("You must choose either Rock, Paper or Scissors");
    }
    
    else {
      i = 2
      break;
      }
  }

  return(playerChoice);
}

function findWinner() {

  if (playerChoice === computerChoice){
  console.log (`you both chose `+ computerChoice +`! draw!`)
  }

  else if ((playerChoice === "rock" && computerChoice === "scissors")||
    (playerChoice === "paper" && computerChoice === "rock")||
    (playerChoice === "scissors" && computerChoice === "paper")){
    console.log(playerChoice + ` beats `+ computerChoice +`! player wins!`)
  }

  else {
    console.log(computerChoice + ` beats `+ playerChoice +`! computer wins!`)
  }
}

function game(){
  getComputerChoice()
  getPlayerChoice()
  findWinner()
}

const rockdiv = document.querySelector("#rock")
const scissorsdiv = document.querySelector("#scissors")
const paperdiv = document.querySelector("#paper")


rockdiv.addEventListener("click", function(){
  console.log("You chose rock!")
})


///game()



let computerChoice = "";
let playerChoice = "";
const gameChoices = ["rock", "paper", "scissors"]


function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = gameChoices[randomNumber];
  return(computerChoice);
}

function getPlayerChoice() {
  rockdiv.addEventListener("click", function(){
    console.log("You chose rock!")
    findWinner("rock")
  })
  
  scissorsdiv.addEventListener("click", function(){
    console.log("You chose scissors!")
    findWinner("scissors")
  })
  
  paperdiv.addEventListener("click", function(){
    console.log("You chose paper!")
    findWinner("paper")
  })
}

function findWinner(playerChoice) {

  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice = gameChoices[randomNumber];

  if (playerChoice === computerChoice){
    alert (`you both chose `+ computerChoice +`! draw!`)
    let resultLine = (`you both chose `+ computerChoice +`! draw!`)
    let result = document.createElement('p')
    result.textContent = resultLine
    resultsList.appendChild(result)

  }

  else if ((playerChoice === "rock" && computerChoice === "scissors")||
    (playerChoice === "paper" && computerChoice === "rock")||
    (playerChoice === "scissors" && computerChoice === "paper")){
    alert(playerChoice + ` beats `+ computerChoice +`! player wins!`)
    let resultLine = (playerChoice + ` beats `+ computerChoice +`! player wins!`)
    let result = document.createElement('p')
    result.textContent = resultLine
    resultsList.appendChild(result)
  }

  else if ((computerChoice === "rock" && playerChoice === "scissors")||
  (computerChoice === "paper" && playerChoice === "rock")||
  (computerChoice === "scissors" && playerChoice === "paper")){
    alert(computerChoice + ` beats `+ playerChoice +`! computer wins!`)
    let resultLine = (computerChoice + ` beats `+ playerChoice +`! computer wins!`)
    let result = document.createElement('p')
    result.textContent = resultLine
    resultsList.appendChild(result)
  }
}

function game(){
  getPlayerChoice()
}

const rockdiv = document.querySelector("#rock")
const scissorsdiv = document.querySelector("#scissors")
const paperdiv = document.querySelector("#paper")
const resultsList = document.querySelector(".results")


game()


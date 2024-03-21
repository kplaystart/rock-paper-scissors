let computerChoice = Math.random();
  
  {
      if (computerChoice <= 0.33) {
      computerChoice = "rock"}
  
  else 
  if (computerChoice <= 0.66) {
    computerChoice = "paper"}
  
  else
  if (computerChoice >= 0.67) {
  computerChoice = "scissors"}
  }
  
  function getComputerChoice (){
    return computerChoice;
  }
      
  console.log(getComputerChoice());






let playerChoice = prompt ("Rock paper, or scissors");

  
function playRound() {
  
    if 
  (playerChoice==computerChoice){
    return "It's a tie";}

          
 if (playerChoice == "rock") {
  if
   (computerChoice == "paper"){
 console.log("You lose!");}
  
  else 
  if (computerChoice == "scissors") {
      console.log("You win!");}
    }

  
  if  (playerChoice == "paper") {
    if (computerChoice == "scissors") {
      console.log("You lose!");}

  else
  if (computerChoice == "rock") {
      console.log("You win!");}}

  
  if (playerChoice == "scissors"){
    if (computerChoice = "paper"){
      console.log("You win!");}

  else 
  if
  (computerChoice == "rock") {
      console.log("You lose!");}

  }

  
}


console.log(playRound());


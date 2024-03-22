
//FUNCTION FOR PLAYROUND (WIN OR LOSE)//


function playRound() 
{

  //FIRST RANDOM COMPUTER CHOICE IS DEFINED//

  let computerChoice = Math.random();
  
  {
      if (computerChoice <= 0.33) 
      {
      computerChoice = "rock"
    }
  
  else 
  if (computerChoice <= 0.66) 
  {
    computerChoice = "paper"
  }
  
  else
  if (computerChoice >= 0.67)
   {
  computerChoice = "scissors"
  }
  }
  
  function getComputerChoice()
  {
   return  computerChoice;
  }
      
  console.log(getComputerChoice());


//NOW ALERTS FOR THE OUTCOME ARE DEFINED AND POINTS ARE ASSIGNED TO WINNER//

  const playerChoice = prompt ("Rock, paper, or scissors").toLowerCase();
  

if (playerChoice === "rock" && computerChoice === "paper")
{
  alert ("You lose! Paper beats rock.")
 return ++compWin;
 }

else 
if (playerChoice === "rock" && computerChoice === "scissors") 
{
    alert ("You win! rock beats scissors");
return ++playerWin;
  }
  
else
if  (playerChoice === "paper" && computerChoice === "scissors") 
   {
    alert ("You lose! Scissors beats paper.");
return ++compWin;
  }

else
if (playerChoice === "paper" && computerChoice === "rock") 
{
    alert ("You win! Paper beats rock.");
     return ++playerWin;
  }

else
if (playerChoice === "scissors" && computerChoice === "paper")
{
    alert ("You win! Scissors beats paper.");
     return ++playerWin;
  }

else 
if
(playerChoice === "scissors" && computerChoice === "rock") 
{
    alert ("You lose! Rock beats scissors.");
  return ++compWin;
  }

else
if 
(playerChoice==computerChoice)
{
  alert ("It is a tie");
}
    

else
if
(undefined)
{
  alert ("I do not know that word!");
return ("");
} 
}


let compWin = 0;
let playerWin = 0;


//FUNCTION PLAYGAME//

function playGame() {

  for(let i=0;i<4;i++) {
      console.log(playRound());
  }
}
playGame();


//GET AND DISPLAY RESULTS//



function results(){
  
  if (compWin > playerWin){
    alert ("You lost!");
    }
    
    else 
    if (compWin < playerWin)
    {
      alert ("You won!")
    }
    
    else 
    {
    alert ("It's a tie!!!")
    }
    }

    console.log(playRound());
    console.log(results());
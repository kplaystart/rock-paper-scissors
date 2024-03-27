
const totalText = document.querySelector("#totalText");
const buttons = document.querySelectorAll(".buttons");
let player;
let result;
let compWin = 0;
let playerWin = 0;
let rounds  = 0 ;


buttons.forEach ((button) => {
    button.addEventListener("click", () => 
{
player = button.id;
 checkWinner (); 
  updateScore();
  endGame ()



});




function updateScore(){
  const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
  playerText.textContent = "Player: " + playerWin.toString();
computerText.textContent = "Computer: " + compWin.toString();
}
  

  function checkWinner() 
{
  let computer = Math.random()

if (computer <= 0.33) 
{
 computer = "rock"
}

else 
if (computer >= 0.34 && computer <= 0.66) 
{
computer = "paper"
}

else
if (computer >= 0.67)
{
 computer = "scissors"
}


function getComputerTurn ()
{return computer;}

console.log(getComputerTurn())



  if (player === "rock" && computer === "paper")
  {
    
    alert ("You lose! Paper beats rock.")
   compWin++;
   return;
   }
  
  else 
  if (player === "rock" && computer === "scissors") 
  {
      alert ("You win! rock beats scissors");
  playerWin++;
  return;
    }
    
  else
  if  (player === "paper" && computer === "scissors") 
     {
      alert ("You lose! Scissors beats paper.");
   compWin++;
   return;
    }
  
  else
  if (player === "paper" && computer === "rock") 
  {
      alert ("You win! Paper beats rock.");
       playerWin++;
       return;
    }
  
  else
  if (player === "scissors" && computer === "paper")
  {
      alert ("You win! Scissors beats paper.");
       playerWin++;
       return;
    }
  
  else 
  if
  (player === "scissors" && computer === "rock") 
  {
      alert ("You lose! Rock beats scissors.");
    compWin++;
    return;
    }
  
  else
  if 
  (player==computer)
  {
    alert ("It is a tie");
    rounds++;
    return;
  
  }
}

})

function endGame (){
  if ((compWin+playerWin+rounds===5) && (compWin > playerWin))
  alert ("GAME IS OVER, the winner is: computer");


  if ((compWin+playerWin+rounds===5) && (compWin < playerWin))
  alert ("GAME IS OVER, the winner is: player");

  if ((compWin+playerWin+rounds===5) && (compWin === playerWin))
  alert ("GAME IS OVER, the winner is: no one")


    }




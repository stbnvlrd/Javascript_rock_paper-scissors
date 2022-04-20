//Button selection
const guessRock = document.querySelector('.guessRock');   
const guessPaper = document.querySelector('.guessPaper');
const guessScissor = document.querySelector('.guessScissor');

// Paragraph output selection
const choices = document.querySelector('.choices');
const lastRound = document.querySelector('.lastRound');
const winResult = document.querySelector('.winResult');
const lostResult = document.querySelector('.lostResult');

// Variables
var playerSelect = '';
var winning = 0;
var losses = 0;
var sum = 0;


//Function that selects a random integer number between 1 and 3, choicing one option for each
// 1 = Rock
// 2 = Paper
// 3 = Scissors
function computerPlay(){
  let randomNumber = Math.floor(Math.random()*3) + 1;
  let computerSelect = '';
  if (randomNumber === 1) {
    computerSelect = 'Rock';
  } else if(randomNumber === 2) {
    computerSelect = 'Paper'
  } else if(randomNumber === 3) {
    computerSelect = 'Scissor'
  } 
  return computerSelect
}

//Function that compare the result of the choice of the computer with the player's
//Show the choice of both, and determine the winner
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  sum = sum + 1;
  var messageText = "Computer select " + computerSelection + " and you selected " + playerSelection;
  choices.textContent = messageText;
  if(playerSelection === computerSelection){
    messageText = "Its a Tie!";
  } else if ((playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Rock' && computerSelection === 'Scissor') || (playerSelection === 'Scissor' && computerSelection === 'Paper')) {
    messageText = "You Win this round!";
    winning = winning + 1;
  } else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissor') || (playerSelection === 'Scissor' && computerSelection === 'Rock')) {
    messageText = "You Lose this round!";
    losses = losses + 1;
  }

  lastRound.textContent = messageText;
  messageText = "Winning: " + winning;
  winResult.textContent = messageText;
  messageText = "Lossing: " + losses;
  lostResult.textContent = messageText;
}

//Function that choice Rock from the player
function checkRock() {

  const userSelect = 'Rock';
  console.log(userSelect);
  computerSelection = computerPlay();
  // playerChoice(userSelect);
  playRound(userSelect, computerSelection);
}

//Function that choice Paper from the player
function checkPaper() {

  const userSelect = 'Paper';
  console.log(userSelect);
  computerSelection = computerPlay();
  // playerChoice(userSelect);
  playRound(userSelect, computerSelection);
}

//Function that choice Scissor from the player
function checkScissor() {

  const userSelect = 'Scissor';
  console.log(userSelect);
  computerSelection = computerPlay();
  // playerChoice(userSelect);
  playRound(userSelect, computerSelection);
}

//Event Listeners for the buttons
guessRock.addEventListener('click', checkRock);
guessPaper.addEventListener('click', checkPaper);
guessScissor.addEventListener('click', checkScissor);




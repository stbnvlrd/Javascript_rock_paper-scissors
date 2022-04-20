const guessRock = document.querySelector('.guessRock');
const guessPaper = document.querySelector('.guessPaper');
const guessScissor = document.querySelector('.guessScissor');
const guessField = document.querySelector('.guessField');
const choices = document.querySelector('.choices');
const lastRound = document.querySelector('.lastRound');
const winResult = document.querySelector('.winResult');
const lostResult = document.querySelector('.lostResult');
var playerSelect = '';
var winning = 0;
var losses = 0;
var sum = 0;
// var computerSelection = '';

function computerPlay(){
  let randomNumber = Math.floor(Math.random()*3) + 1;
  let computerSelect = '';
  if (randomNumber === 1) {
    computerSelect = 'Rock';
  } else if(randomNumber === 2) {
    computerSelect = 'Paper'
  } else if(randomNumber === 3) {
    computerSelect = 'Scissor'
  } else {
    window.alert("Computer select is outside of range");
  }
  console.log(computerSelect);
  return computerSelect
}

// function playerChoice(userSelect){
//   if(userSelect.toLowerCase() === 'rock') {
//     playerSelect = 'Rock';
//   } else if(userSelect.toLowerCase() === 'paper') {
//     playerSelect = 'Paper';
//   } else if(userSelect.toLowerCase() === 'scissor') {
//     playerSelect = 'Scissor';
//   } else {
//     window.alert("Player selected unknown option, Rock is choose by defalut");
//     playerSelect = 'Rock';
//   }
//   console.log(playerSelect);
// }

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

function checkRock() {

  const userSelect = 'Rock';
  console.log(userSelect);
  computerSelection = computerPlay();
  // playerChoice(userSelect);
  playRound(userSelect, computerSelection);
}

function checkPaper() {

  const userSelect = 'Paper';
  console.log(userSelect);
  computerSelection = computerPlay();
  // playerChoice(userSelect);
  playRound(userSelect, computerSelection);
}

function checkScissor() {

  const userSelect = 'Scissor';
  console.log(userSelect);
  computerSelection = computerPlay();
  // playerChoice(userSelect);
  playRound(userSelect, computerSelection);
}

guessRock.addEventListener('click', checkRock);
guessPaper.addEventListener('click', checkPaper);
guessScissor.addEventListener('click', checkScissor);




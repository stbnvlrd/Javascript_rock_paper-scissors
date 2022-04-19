const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
var playerSelect = '';
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

function playerChoice(userSelect){
  if(userSelect.toLowerCase() === 'rock') {
    playerSelect = 'Rock';
  } else if(userSelect.toLowerCase() === 'paper') {
    playerSelect = 'Paper';
  } else if(userSelect.toLowerCase() === 'scissor') {
    playerSelect = 'Scissor';
  } else {
    window.alert("Player selected unknown option, Rock is choose by defalut");
    playerSelect = 'Rock';
  }
  console.log(playerSelect);
}

function checkGuess() {

  // const userSelect = guessField.value;
  const userSelect = guessField.value;
  computerSelection = computerPlay();
  playerChoice(userSelect);
  playRound(playerSelect, computerSelection);
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  var messageText = "Computer select " + computerSelection + " and you selected " + playerSelection + "\n";
  if(playerSelect === computerSelection){
    window.alert(messageText + "Its a Tie");
  } else if ((playerSelect === 'Paper' && computerSelection === 'Rock') || (playerSelect === 'Rock' && computerSelection === 'Scissor') || (playerSelect === 'Scissor' && computerSelection === 'Paper')) {
    window.alert(messageText + "You Win!");
  } else if ((playerSelect === 'Rock' && computerSelection === 'Paper') || (playerSelect === 'Paper' && computerSelection === 'Scissor') || (playerSelect === 'Scissor' && computerSelection === 'Rock')) {
    window.alert(messageText + "You Lose!");
  }
}




guessSubmit.addEventListener('click', checkGuess);



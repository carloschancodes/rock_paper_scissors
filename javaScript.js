//declare vars
let playerSelection;
let computerSelection;
let userScore = 0; 
let computerScore = 0; 
const player = document.querySelector('.user_score_display');
const computer = document.querySelector('.computer_score_display');

//user selection fxns
playRock = () => {
    return playerSelection = 'rock';
}

playPaper = () => {
    return playerSelection = 'paper';
}

playScissors = () => {
    return playerSelection = 'scissors';
}

//computer choice
computerPlay = () => { 
    let randomChoice = ['rock', 'paper', 'scissors']; //array
    return computerSelection = randomChoice[Math.floor(Math.random() * randomChoice.length)]; //random array choice formula that calls one '' in randomChoice array
}

//scenarios for user/computer win
const result = document.querySelector('.result');
const textResult = document.querySelector('.text_result');

compWin = () => {
    computerScore++;
    scoreAfter();
}

userWin = () => {
    userScore++;
    scoreAfter();
}

tie = () => {
    textResult.textContent = 'Try again, you both picked ' + computerSelection + '.';
}

//play round
playRound = (playerSelection, computerSelection) => { 
    if (userScore < 5 && computerScore < 5) {
        if (playerSelection === 'rock' && computerSelection === 'paper') {
            textResult.textContent = 'Sucks to suck! Paper beats Rock.';
            compWin();
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            textResult.textContent = 'Sucks to suck! Rock beats Scissors.';
            compWin();
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
            textResult.textContent = 'Sucks to suck! Scissors beats Paper.';
            compWin();
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
            textResult.textContent = 'Lucky you! Rock beats Scissors.';
            userWin()
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
            textResult.textContent = 'Lucky you! Scissors beats Paper.';
            userWin()
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
            textResult.textContent = 'Lucky you! Paper beats Rock.';
            userWin()
        } else {
            tie();
        }
    } else if (computerScore === 5 || userScore === 5) {
            winnerText();
        }
}

// Add event listener when user rock, paper, or scissors
const rock = document.querySelector('#rock');
  rock.addEventListener('click', function () {
      playRock();
      computerPlay();
      playRound(playerSelection, computerSelection);
  })
  
  
const paper = document.querySelector('#paper');
  paper.addEventListener('click', function () {
      playPaper();
      computerPlay();
      playRound(playerSelection, computerSelection);
  })
  
const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', function () {
      playScissors();
      computerPlay();
      playRound(playerSelection, computerSelection);
  })

  // Announce the winner of 5 rounds
winnerText = () =>{
    if (userScore === 5) {
        result.textContent = ' You won.... this time! ';
    } else if (computerScore === 5) {
        result.textContent = ' Try again next time... loser';
    } else {
        result.textContent = ' It\'s a Tie ! Better Luck Next Time !';
    }
}

// Display current score of the game
scoreAfter = () => {
    player.textContent = 'Player Score : ' + userScore;
    computer.textContent = 'Computer Score : ' + computerScore;
}

//retry
const retry = document.querySelector('.retry');
retry.addEventListener('click', function () {
    refresh();
})

refresh = () => {    
    setTimeout(function () {
        location.reload()
    }, 100);
}
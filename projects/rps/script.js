let playerScore = 0; //starting score
let computerScore = 0; //starting score
let computerRoll; //store the computer roll 
let playerRoll; //store the player's roll

function computerPlay() {
    //will return Rock, Paper, or Scissors
    let random = Math.random() * 1;
    let roll;
    if (random < 0.3){
        roll = "rock";
    } else if (random < 0.6){
        roll = "paper";
    } else {
        roll = "scissors"
    }
    console.log("The computer has rolled " + roll);
   
    return roll; 
}

function playRound(playerSelection, computerSelection){
    computerRoll = computerPlay();
    playerRoll = prompt("Rock, paper, or scissors?");
    console.log("The player has rolled " + playerRoll);
    let display;
    let whoWon; 
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        display = "You lose! Paper beats Rock";
        whoWon = "computer";
        computerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        display = "You lose! Scissors beats paper";
        whoWon = "computer";
        computerScore++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        display = "You lose! Rock beats scissors";
        whoWon = "computer";
        computerScore++;
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        display = "It's a tie!";
        whoWon = "No one";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        display = "You win! Rock beats scissors";
        whoWon = "player";
        playerScore++;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        display = "You win! Paper beats rock";
        whoWon = "player";
        playerScore++;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        display = "You win! Scissors beats paper";
        whoWon = "player";
        playerScore++;
    }
    console.log(display);   
    console.log("Player Score:" + playerScore + " Computer score: " + computerScore); 
    return whoWon;
}


function game(){
    // playerRoll = prompt('Rock, paper, or scissors?')
    
    computerRoll = computerPlay();
    playRound(playerRoll, computerRoll);
   
}
// for (var i = 0; i < 5; i++){
    game();
// }

//add an even listener to buttons [Rock, paper, scissors] that will update the playerSelection to whichever button is clicked
    //everytime a button is clicked
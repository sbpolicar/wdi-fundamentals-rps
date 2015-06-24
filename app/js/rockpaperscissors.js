////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // If a move is given, your expression should evaluate to that move.
    // If move is not specified / is null, your expression should run getInput()
    return move || getInput();
}

function getComputerMove(move) {
    // If a move is given, your expression should evaluate to that move.
    // If move is not specified / is null, your expression should run randomPlay()
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
    if (playerMove === computerMove) {return 'draw';} 
        else if (playerMove === 'rock' && computerMove === 'scissors') return 'player';
        else if (playerMove === 'paper' && computerMove === 'rock') return 'player';
        else if (playerMove === 'scissors' && computerMove === 'paper') return 'player';
        else if (computerMove === 'rock' && playerMove === 'scissors') return 'computer';
        else if (computerMove === 'paper' && playerMove === 'rock') return 'computer';
        else if (computerMove === 'scissors' && playerMove === 'paper') return 'computer';
    return winner;
}

function playToFive() {
    console.log("Let's play Rock Paper Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
       var winner = getWinner(playerMove,computerMove);
        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === 'computer') {
            computerWins += 1;
        }
        
        console.log("Player shows " + playerMove + " while Computer shows " + computerMove);
        console.log("The score is now " + playerWins + " to " + computerWins + "\n");
    }
    return [playerWins, computerWins];
}

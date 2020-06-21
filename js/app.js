const playChoices = ['Rock', 'Paper', 'Scissors'];

let playerScore;
let computerScore;

function computerPlay(array) {
    return (Math.floor(Math.random()  * array.length));
}

function playRound(playerSelection, computerSelection) {
    
	if (playerSelection == computerSelection) {
        return 'niko';
    } else if (playerSelection == 0 && computerSelection == 1) {
        return 'comp wins';
    } else if (playerSelection == 0 && computerSelection == 2) {
        return 'player wins';
    } else if (playerSelection == 1 && computerSelection == 0) {
        return 'player wins';
    } else if (playerSelection == 1 && computerSelection == 2) {
        return 'comp wins';
    } else if (playerSelection == 2 && computerSelection == 0) {
        return 'comp wins';
    } else if (playerSelection == 2 && computerSelection == 1) {
        return 'player wins';
    }
}

const playerSelection = prompt('reeeci', 0);
const computerSelection = computerPlay(playChoices)
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection))
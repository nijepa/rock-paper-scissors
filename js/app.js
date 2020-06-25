const playChoices = ['Rock', 'Paper', 'Scissors'];

let gameStarted = false;
let playerScore = 0;
let computerScore = 0;
let computerSelection = 0;

let startBtn = document.getElementById('startBtn')
startBtn.addEventListener('click', function() {
    if (gameStarted == false)  {
        gameStarted = true;
        init();
        
    }
})

function computerPlay(array) {
    return (Math.floor(Math.random()  * array.length));
}

let imgDiv = document.getElementById('cardChoices');
let images = [].slice.call(imgDiv.querySelectorAll('.imgChoice'), 0); // get all images inside frame1, and convert to array

imgDiv

// add an event listener that will handle all clicks inside imgDiv
.addEventListener('click', function(e) {

    // find the index of the clicked target from the images array
    var index = images.indexOf(e.target)

    computerSelection = computerPlay(playChoices);

    if(index !== -1) { // if no image was clicked
        if (gameStarted == true) {
            if (playerScore == 5 || computerScore == 5) {
                init();
            } else {
                imgsVisibility(true);
                playRound(index, computerSelection);
            }
        }
    }
});


function playRound(playerSelection, computerSelection) {

    let pPlay = playChoices.slice(playerSelection, playerSelection + 1);
    pPlay = pPlay.toString()

    let cPlay = playChoices.slice(computerSelection, computerSelection + 1);
    cPlay = cPlay.toString();


	if (playerSelection == computerSelection) {
        renderMessage('draw', pPlay, cPlay, '=');
        return 'draw';
    } else if (playerSelection == 0 && computerSelection == 1) {
        renderScore(playerScore, computerScore);
        adjustScore(0, 1);
        renderMessage('ai wins :(', pPlay, cPlay, '<');
        return 'comp wins';
    } else if (playerSelection == 0 && computerSelection == 2) {
        renderMessage('you win :)', pPlay, cPlay, '>');
        adjustScore(1, 0);
        renderScore(playerScore, computerScore);
        return 'player wins';
    } else if (playerSelection == 1 && computerSelection == 0) {
        renderMessage('you win :)', pPlay, cPlay, '>');
        adjustScore(1, 0);
        renderScore(playerScore, computerScore);
        return 'player wins';
    } else if (playerSelection == 1 && computerSelection == 2) {
        renderMessage('ai wins :(', pPlay, cPlay, '<');
        adjustScore(0, 1);
        renderScore(playerScore, computerScore);
        return 'comp wins';
    } else if (playerSelection == 2 && computerSelection == 0) {
        renderMessage('ai wins :(', pPlay, cPlay, '<');
        adjustScore(0, 1);
        renderScore(playerScore, computerScore);
        return 'comp wins';
    } else if (playerSelection == 2 && computerSelection == 1) {
        renderMessage('you win :)', pPlay, cPlay, '>');
        adjustScore(1, 0);
        renderScore(playerScore, computerScore);
        return 'player wins';
    }

}

let renderScore = function(playerScore, computerScore) {
    document.getElementById('playerScore').innerHTML = playerScore;

    document.getElementById('compScore').innerHTML = computerScore;

    if (computerScore >= 5) {   
        gameStarted = false;
        imgsVisibility(false);
        renderMessage(`Comp wins ${computerScore} to ${playerScore}`, '', '', '');
        return;
    }
    if (playerScore >= 5) {
        gameStarted = false;
        imgsVisibility(false);
        renderMessage(`Player wins ${playerScore} to ${computerScore}`, '', '', '');
        return;
    } 
    
}

let renderMessage = function(message, pPlay, cPlay, sPlay) {
    document.getElementById('message').innerText = message.toUpperCase();
    document.getElementById('signPlay').innerText = sPlay;
    document.getElementById('compPlay').src = './img/' + cPlay.toLowerCase() + '.png';
    document.getElementById('playerPlay').src = './img/' + pPlay.toLowerCase() + '.png';
    
}

function adjustScore(playerWins, compWins) {
    if (playerWins > 0) {
        playerScore < 5 ? playerScore += 1 : 'muu';
    } else if (compWins > 0) {
        computerScore < 5 ? computerScore += 1 : 'fuu';
    }
}

function imgsVisibility(visible) {
    var img = document.getElementById('compPlay');
    img.style.visibility = (visible ? 'visible' : 'hidden');
    var img1 = document.getElementById('playerPlay');
    img1.style.visibility = (visible ? 'visible' : 'hidden');
}

function init() {
    playerScore = 0;
    computerScore = 0;
    renderScore(0, 0);
    imgsVisibility(false);
    renderMessage('Begin play', '', '', ':');
}
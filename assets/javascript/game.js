let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guesses = []
alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

let randomLetter = () => {
 computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
}

function reset() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    randomLetter();
}

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    randomLetter();
    var check = computerChoice.includes(userGuess);

    if (userGuess === computerChoice) {
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        youWon();
    }

    if (userGuess != computerChoice) {
        guessesLeft--;
        document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
    }

    if ( guessesLeft === 0 ) {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alertLoss();
	}
};



let youWon = () => {
    alert("You're right, " + computerChoice + " was my letter. Your psychic ability is worrisome...");
    reset();
};

let youLost = () => {
    alert("Sorry, " + userGuess + " is incorrect. My number was " + computerChoice + ". (Whew, I was getting worried...)" );
    reset();
};

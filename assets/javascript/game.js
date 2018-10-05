var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var computerChoice;
alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

var randomLetter = function() {
computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var letterList = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft
};

var left = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guesses.join(",");
};

function reset() {
    guessedLetters = [];
    totalGuesses = 9;
    guessesLeft = 9;
    guesses = [];
    randomLetter();
};

document.onkeyup = function(event) {

    var userGuess = event.key;
    guessesLeft--;
    guesses.push(userGuess);
    letterList();
    left();

    if ((guessesLeft > 0) && (userGuess === computerChoice)) {
        wins++;
        reset();
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        alert("You're right, " + computerChoice + " was my letter. Your psychic ability is worrisome...");
    }; if (guessesLeft == 0) {
        losses++;
        reset();
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        alert("Sorry, " + userGuess + " was your final guess. My letter was " + computerChoice + ". (Whew, I was getting worried...)" );
    };

};
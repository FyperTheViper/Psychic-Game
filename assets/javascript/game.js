var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var computerChoice;
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var spooky = new Audio("./assets/sounds/spooky.mp3")

var randomLetter = function() {
computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
};

var letterList = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft
};

var left = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guesses.join(", ");
};

function reset() {
    guessedLetters = [];
    guessesLeft = 9;
    guesses = [];
    randomLetter();
    letterList()
    left()
};

document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = alphabet.includes(userGuess);

    guessesLeft--;
    guesses.push(userGuess);
    letterList();
    left();
    randomLetter()

    if (check === false) {
        alert("Not a valid key, use a - z. (I thought you were psychic?)");
        return false;
    } else if (check === true) {
        left()
    
    
    if ((guessesLeft > 0) && (userGuess === computerChoice)) {
        wins++;
        spooky.play();
        document.getElementById("wins").innerHTML = "Wins:      " + wins;
        alert("You're right, " + computerChoice.toUpperCase() + " was my letter. Your psychic ability should be... developed.");
        reset();
    } else if (guessesLeft == 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses:      " + losses;
        alert("Sorry, " + userGuess.toUpperCase() + " was your final guess. My letter was " + computerChoice.toUpperCase() + ". (Oh well, prehaps the next candidate...)" );
        reset();
    }
}
return false;

};
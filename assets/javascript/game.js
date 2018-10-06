//variables
//thank .split to divide up string faster
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guesses = [];
var userGuess = [];

//very spooky sound that plays when win conditional is met
var spooky = new Audio("./assets/sounds/spooky.mp3")

//computer decides random letter here
var randomLetter = function() {
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
};

//counts down guess number
var letterList = function() {
    document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft
};

//adds keys pushed and joins them with a comma
var left = function() {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guesses.join(", ");
};

//reset function that refreshes appropriate areas once a win or loss is achieved
function reset() {
    guessedLetters = [];
    guessesLeft = 9;
    guesses = [];
    randomLetter();
    letterList();
    left();
};


//where the magic happens, function starts when key is pressed
document.onkeyup = function(event) {

    //ensures that keys should work even during caps lock and checks if a valid (a-z) key is pushed
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = alphabet.includes(userGuess);

    //prevents guesses from going below zero when a non valid key was pressed
    if (guessesLeft === 0) {
        reset();
    }

    //counds down guess and invokes functions
    guessesLeft--;
    guesses.push(userGuess);
    letterList();
    left();

    //finger wagging message for when non valid key is pressed
    if (check === false) {
        alert("Not a valid key, use a - z. (I thought you were psychic?)");
        return false;
    } else if (check === true) {
        left()
    
    //win conditional
    if ((guessesLeft > 0) && (userGuess === computerChoice)) {
        //changes image upon win, with timeouts
        document.querySelector('.eye1').style.display = 'none' 
        document.querySelector('.eye2').style.display = 'block' 
        setTimeout(function() { 
            document.querySelector('.eye1').style.display = 'block' 
            document.querySelector('.eye2').style.display = 'none' 
        }, 2000);
        wins++;
        spooky.play();
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        setTimeout(function() {
            alert("You're right, " + computerChoice.toUpperCase() + " was my letter. Your psychic ability should be... developed." )
        }, 200);
        reset();

    //losing conditional
    } else if (guessesLeft == 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        alert("Sorry, " + userGuess.toUpperCase() + " was your final guess. My letter was " + computerChoice.toUpperCase() + ". (Oh well, prehaps the next candidate...)" );
        reset();
    } 
} 

return false;
};
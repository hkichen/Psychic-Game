//define usable values
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
var wins = 0;
var losses = 0;
var guesses = 10;

var computerChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(computerChoice);

document.onkeyup = function(event) {
    var userGuess = event.key;
        
    if (userGuess === computerChoice
    ) {
        wins = wins + 1
    } else {
        guesses = guesses - 1
    }
    if (guesses === 0
    ) {
        losses = losses + 1
    }
            
    var html = "<p>" + "You chose: " + userGuess + "</p>" + "<p>" + "Wins: " + wins + "</p>" + "<p>" + "Losses: " + losses + "</p>" + "<p>" + "Guesses: " + guesses + "</p>"; document.querySelector("#game").innerHTML = html;
}
function clearFields() {
    userGuess.value = "";
    guesses = 10;
    computerChoice = letters[Math.floor(Math.random() * letters.length)];
}


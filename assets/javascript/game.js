//define usable values
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
var wins = 0;
var losses = 0;
var guesses = 10;
    
document.onkeyup = function(event) {
    var userGuess = event.key;
        
    //if user guesses same as computer, then computer chooses new letter
    if (userGuess === computerChoice) {
    var computerChoice = letters[Math.floor(Math.random() * letters.length)];
    
    console.log(computerChoice);
            
    if(userGuess === computerChoice){wins++;}else{guesses--;}
    if(guesses === 0){losses++;}
            
    var html = "<p>You chose: " + userGuess + "</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses: " + guesses + "</p>"; document.querySelector("#game".innerHTML = html);
        }
};
    
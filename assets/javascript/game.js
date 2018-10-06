var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
var guessedLetters = [];

function restart() {
    guessedLetters = [];
    guessesLeft = 10;
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

document.onkeyup = function(event) {
    var guess = event.key

    if (guess === randomLetter) {
        wins++;
        restart();
    } else {
        if (guessesLeft > 0) {
            guessesLeft--;
            guessedLetters.push(guess);
        }
    }

    if (guessesLeft === 0) {
        losses++
        restart();
    }

    guessedLetters.push[guess];




    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("remaining").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("guesses").innerHTML = "Guessed Letters: " + guessedLetters.join(', ');
}
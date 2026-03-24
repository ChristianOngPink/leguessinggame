function startGame() {
    let randNum = Math.floor(Math.random () * 10) + 1;
    let maxAttempts = 3;
    
    for (let i = 0; i < maxAttempts; i++) {
        let userGuess = prompt("Try and guess a number betwen 1 and 10:");
        userGuess = Number(userGuess);
       
        if (userGuess == randNum) {
            alert("Congratulations! You guessed the number: " + randNum);
            return;
        }
        else if (userGuess < randNum) {
            alert("OOF!! Too Low Bro!! " + (maxAttempts - (i+1)) + " attempts Left.");
        }
        else {
            alert("OOF!! Too High Guy!! " + (maxAttempts - (i+1)) + " attempts Left.");
        }
    }
    alert("You Lose! The correct number was: " + randNum);
}
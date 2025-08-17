
const max = parseInt(prompt("Enter the maximum number:"));

const random = Math.floor(Math.random() * max) + 1;
console.log("Random number (for testing):", random);

let guess = prompt("Guess the number or type 'quit' to exit:");

while (true) {
    if (guess.toLowerCase() === "quit") {
        console.log("User quit the game.");
        break;
    }

    let guessNum = parseInt(guess);

    if (guessNum === random) {
        console.log(`🎉 Congrats! You guessed it right: ${guessNum}`);
        break;
    } 
    else if (guessNum > random) {
        guess = prompt(`Your guess is too high! Try a number less than ${guessNum}:`);
    } 
    else if (guessNum < random) {
        guess = prompt(`Your guess is too low! Try a number greater than ${guessNum}:`);
    } 
    else {
        guess = prompt("Invalid input! Please enter a number or type 'quit' to exit:");
    }
}

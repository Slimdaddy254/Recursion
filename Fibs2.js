const readline = require('readline');

function fibsRec(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    // Recursively build the sequence
    const fibSequence = fibsRec(n - 1);
    fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    return fibSequence;
}

// Create an interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Enter the number of Fibonacci numbers to generate: ', (answer) => {
    const n = parseInt(answer, 10);
    if (isNaN(n) || n < 0) {
        console.log('Please enter a valid positive integer.');
    } else {
        console.log(`Fibonacci sequence (${n} numbers):`, fibsRec(n));
    }
    rl.close(); // Close the input stream
});

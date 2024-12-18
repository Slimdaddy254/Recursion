const readline = require('readline');

function fibs(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    }

    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
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
        console.log(`Fibonacci sequence (${n} numbers):`, fibs(n));
    }
    rl.close(); // Close the input stream
});

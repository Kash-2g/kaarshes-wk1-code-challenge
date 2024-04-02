// Helper function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to filter out prime numbers from an array
function filterPrimes(numbers) {
    return numbers.filter(num => isPrime(num));
}

// Example usage:
const inputArray = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const primeNumbers = filterPrimes(inputArray);
console.log(primeNumbers); // Output: [11, 13, 17, 19]
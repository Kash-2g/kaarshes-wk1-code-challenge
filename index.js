function swapCase(inputString) {
    // Convert the string to an array of characters
    let characters = inputString.split('');

    // Iterate over each character
    for (let i = 0; i < characters.length; i++) {
        let char = characters[i];
        // Check if the character is a letter
        if (/[a-zA-Z]/.test(char)) {
            // Swap its case
            if (char === char.toUpperCase()) {
                characters[i] = char.toLowerCase();
            } else {
                characters[i] = char.toUpperCase();
            }
        }
    }

    // Join the array of characters back into a string
    return characters.join('');
}

// Example usage:
const inputString = 'The Fastest Man Alive';
const swappedString = swapCase(inputString);
console.log(swappedString); // Output: 'tHE fASTEST mAN  aLIVE'
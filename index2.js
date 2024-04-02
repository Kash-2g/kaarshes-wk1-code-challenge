function generateArrayBetween(start, end) {
    let result = [];
    
    // Determine the direction of iteration
    let step = start < end ? 1 : -1;

    // Generate the array
    for (let i = start; i !== end + step; i += step) {
        result.push(i);
    }
    
    return result;
}

// Examples:
console.log(generateArrayBetween(5, 8));  // Output: [5, 6, 7, 8]
console.log(generateArrayBetween(-5, 8)); // Output: [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
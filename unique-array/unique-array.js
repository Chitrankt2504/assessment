function uniqueValues(arr) {
    // Step 2: Use a Set to filter unique values
    const uniqueSet = new Set(arr);

    // Step 3: Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);

    // Step 4: Return the new array
    return uniqueArray;
}

// Example usage:
console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(uniqueValues([1, 1, 1, 1, 1])); // [1]
console.log(uniqueValues([5, 4, 3, 2, 1, 5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1]
console.log(uniqueValues([7, 8, 8, 9, 10, 7, 6])); // [7, 8, 9, 10, 6]

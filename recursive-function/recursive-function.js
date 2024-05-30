function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n * factorial(n - 1)
    return n * factorial(n - 1);
}

// Example usage:
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040
console.log(factorial(10)); // 3628800

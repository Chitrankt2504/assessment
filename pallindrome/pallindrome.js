function isPalindrome(str) {
    // Step 1: Normalize the string
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Step 2: Reverse the normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');

    // Step 3: Compare the original normalized string with the reversed string
    return normalizedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true

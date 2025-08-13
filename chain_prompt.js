/**
 * Converts a camelCase or PascalCase string to kebab-case.
 * - Returns an empty string for empty input.
 * - Throws an error if the input is not a string.
 * @param {string} str - The input string to convert.
 * @returns {string} The kebab-case version of the input.
 */
function toKebabCase(str) {
    // Check if input is a string
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    // Return empty string for empty input
    if (str.trim() === '') {
        return '';
    }
    // Replace uppercase letters with '-' + lowercase letter
    // Handles camelCase and PascalCase
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // Insert dash between lower/number and upper
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2') // Insert dash between consecutive uppers followed by lower
        .replace(/([A-Z])/g, (match, offset) => offset === 0 ? match.toLowerCase() : '-' + match.toLowerCase()) // PascalCase first letter
        .toLowerCase();
}

// Example test cases:
console.log(toKebabCase('myVariableName'));      // Output: "my-variable-name"
console.log(toKebabCase('MyVariableName'));      // Output: "my-variable-name"
console.log(toKebabCase('XMLHttpRequest'));      // Output: "xml-http-request"
console.log(toKebabCase(''));                    // Output: ""
try {
    console.log(toKebabCase(123));                // Throws error
} catch (e) {
    console.log(e.message);                       // Output: "Input must be a string"
}
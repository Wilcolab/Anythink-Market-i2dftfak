/**
 * Converts a given string to camelCase format.
 *
 * This function processes the input string by splitting it into words using spaces, hyphens, and underscores as delimiters.
 * It ignores leading, trailing, and multiple consecutive delimiters, ensuring only valid words are processed.
 * The first word is converted to lowercase, and each subsequent word is capitalized and concatenated to form a camelCase string.
 * If the input is empty or contains only delimiters, an empty string is returned.
 * Throws a TypeError if the input is not a string.
 *
 * @param {string} str - The input string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} If the input is not a string.
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * This function splits the input string into words using spaces, hyphens, and underscores as delimiters.
 * It ignores leading, trailing, and multiple consecutive delimiters, ensuring only valid words are processed.
 * All words are converted to lowercase and joined using dots ('.') to produce a dot.case string.
 * If the input is empty or contains only delimiters, an empty string is returned.
 * Throws a TypeError if the input is not a string.
 *
 * @param {string} str - The input string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {TypeError} If the input is not a string.
 */

function toCamelCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Split by any sequence of space, hyphen, or underscore
    const words = str
        .trim()
        .split(/[\s-_]+/)
        .filter(Boolean); // Remove empty strings

    if (words.length === 0) return '';

    // Lowercase first word, capitalize subsequent words
    return (
        words[0].toLowerCase() +
        words
            .slice(1)
            .map(
                word =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join('')
    );
}

// Unit tests
function runTests() {
    const tests = [
        // Typical cases
        { input: 'hello world', expected: 'helloWorld' },
        { input: 'Hello World', expected: 'helloWorld' },
        { input: 'hello-world', expected: 'helloWorld' },
        { input: 'hello_world', expected: 'helloWorld' },
        { input: 'hello-world_test', expected: 'helloWorldTest' },
        { input: '  hello   world  ', expected: 'helloWorld' },
        { input: 'HELLO-WORLD', expected: 'helloWorld' },
        { input: 'user_name', expected: 'userName' },
        { input: 'user-name', expected: 'userName' },
        { input: 'user name', expected: 'userName' },
        { input: 'user--name', expected: 'userName' },
        { input: 'user__name', expected: 'userName' },
        { input: 'user  name', expected: 'userName' },
        { input: 'user-name_test', expected: 'userNameTest' },
        { input: 'user_name-test', expected: 'userNameTest' },
        { input: 'user--name__test', expected: 'userNameTest' },
        // Edge cases
        { input: '', expected: '' },
        { input: '   ', expected: '' },
        { input: '---', expected: '' },
        { input: '__', expected: '' },
        { input: '-_-_-', expected: '' },
        { input: 'A', expected: 'a' },
        { input: 'a', expected: 'a' },
        { input: 'A_B_C', expected: 'aBC' },
        { input: 'a-b-c', expected: 'aBC' },
        { input: 'a b c', expected: 'aBC' },
        { input: 'a--b__c', expected: 'aBC' },
        // Mixed case
        { input: 'tHis_is-A tEsT', expected: 'thisIsATest' },
        // Non-string input
        { input: null, expectedError: true },
        { input: undefined, expectedError: true },
        { input: 123, expectedError: true },
        { input: {}, expectedError: true },
        { input: [], expectedError: true },
    ];

    let passed = 0;
    let failed = 0;

    tests.forEach(({ input, expected, expectedError }, idx) => {
        try {
            const result = toCamelCase(input);
            if (expectedError) {
                console.error(`Test ${idx + 1} FAILED: Expected error for input ${JSON.stringify(input)}`);
                failed++;
            } else if (result === expected) {
                passed++;
            } else {
                console.error(
                    `Test ${idx + 1} FAILED: Input: ${JSON.stringify(input)} | Expected: ${JSON.stringify(
                        expected
                    )} | Got: ${JSON.stringify(result)}`
                );
                failed++;
            }
        } catch (e) {
            if (expectedError) {
                passed++;
            } else {
                console.error(
                    `Test ${idx + 1} FAILED: Input: ${JSON.stringify(input)} | Unexpected error: ${e.message}`
                );
                failed++;
            }
        }
    });

    console.log(`Passed: ${passed}, Failed: ${failed}`);
}

// Run unit tests
runTests();

/**
 * Converts a given string to dot.case.
 * Handles spaces, hyphens, underscores, and mixed delimiters.
 * Ignores leading, trailing, and multiple consecutive delimiters.
 * Returns an empty string if input is empty or contains only delimiters.
 * Throws an error if input is not a string.
 * @param {string} str - The input string to convert.
 * @returns {string} - The dot.case formatted string.
 */
function toDotCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    const words = str
        .trim()
        .split(/[\s-_]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage and simple tests
console.log(toDotCase('hello world')); // "hello.world"
console.log(toDotCase('Hello-World_test')); // "hello.world.test"
console.log(toDotCase('  HELLO   WORLD  ')); // "hello.world"
console.log(toDotCase('')); // ""



// Given a sentence where words are separated by spaces, convert it into camelCase format. The first word of the resulting string should start with a lowercase letter, and all subsequent words should start with an uppercase letter. All other letters should be lowercase, and there should be no spaces.

// Example 1
// Input: sentence = "hello world"

// Output: "helloWorld"

// Example 2
// Input: sentence = "java script is fun"

// Output: "javaScriptIsFun"

// Constraints
// The input `sentence` will be a string.
// Words will be separated by one or more spaces.
// The input may contain leading or trailing spaces.
function convertToCamelCase(sentence) {
    const words = sentence.trim().split(" ");

    let result = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
        if (words[i] === "") {
        continue;
    }
        const word = words[i].toLowerCase();

        result = result + word[0].toUpperCase() + word.slice(1);
    }

    return result;
}
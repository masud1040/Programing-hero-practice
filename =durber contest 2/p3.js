
// Given a string, find the first character that appears only once in the string. If no such character exists, return -1.

// Example 1
// Input: s = "aabbcdeff"

// Output: "c"

// Example 2
// Input: s = "aabb"

// Output: -1

// Constraints
// The input string `s` will consist of lowercase English letters.
// `s` length will be between 0 and 1000.


function findFirstUniqueChar(s) {
    let result = -1;

    for (let i = 0; i < s.length; i++) {
        let count = 0;

        for (let j = 0; j < s.length; j++) {
            if (s[i] === s[j]) {
                count++;
            }
        }

        if (count === 1) {
            result = s[i];
            break;
        }
    }

    return result;
}
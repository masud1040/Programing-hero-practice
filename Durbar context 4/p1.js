// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Given two strings, s1 and s2, determine if they are anagrams of each other.

// You should consider the strings to be anagrams if they contain the same letters with the same frequency, regardless of case, spaces, or punctuation. Only alphabetic characters should be considered.

// Examples
// isAnagram("listen", "silent");
// // => true

// isAnagram("Hello", "world");
// // => false

// isAnagram("A decimal point", "I'm a dot in place");
// // => true
// Example 1
// Input: s1 = "listen", s2 = "silent"

// Output: true

// Example 2
// Input: s1 = "Hello", s2 = "world"

// Output: false

// Constraints
// Input strings `s1` and `s2` contain English letters, spaces, and punctuation.
// The length of `s1` and `s2` will be between 0 and 1000 characters.


const convertToLowerCase = (text) => {
    
  let result = "";

  for (const character of text.toLowerCase()) {
    if (character >= "a" && character <= "z") {
      result += character;
    }
  }

  return result;
};

const isAnagram = (s1, s2) => {
  const str1 = convertToLowerCase(s1);
  const str2 = convertToLowerCase(s2);


  if (str1.length !== str2.length) {
    return false;
  }

  const count = {};

for (const letter of str1) {
  if (count[letter]) {
    count[letter] = count[letter] + 1;
  } 
  else {
    count[letter] = 1;
  }
}

  for (const letter of str2) {
    if (!count[letter]) {
      return false;
    }

    count[letter]--;
  }

  return true;
};




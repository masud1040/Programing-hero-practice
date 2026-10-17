// Validate Bangladeshi Mobile Number
// Medium
// 268 solved
// 269 attempted
// Topics
// Hint
// 60 XP
// Determine if a given string represents a valid Bangladeshi mobile number. A valid number must conform to one of the following formats:

// Starts with 01, followed by 9 more digits. The digit immediately after 01 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., 01712345678)
// Starts with +8801, followed by 9 more digits. The digit immediately after +8801 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., +8801712345678)
// Starts with 8801, followed by 9 more digits. The digit immediately after 8801 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., 8801712345678)
// All characters must be digits, except for the optional leading + sign.

// Example 1
// Input: phoneNumber = "01712345678"

// Output: true

// Example 2
// Input: phoneNumber = "+8801987654321"

// Output: true

// Constraints
// The input `phoneNumber` will be a string.

// Topics

// Hints
// Hint 1. Consider using regular expressions to match the different valid patterns.
// Hint 2. Pay attention to the specific prefixes (`01`, `+8801`, `8801`) and the allowed digits immediately following them.
// Hint 3. Ensure the total length of the number matches the expected format for each case.

function isValid(phoneNumber) {
  if (phoneNumber.startsWith("+8801")) {
    if (phoneNumber.length !== 14) return false;
    phoneNumber = phoneNumber.slice(5);
  } else if (phoneNumber.startsWith("8801")) {
    if (phoneNumber.length !== 13) return false;
    phoneNumber = phoneNumber.slice(4);
  } else if (phoneNumber.startsWith("01")) {
    if (phoneNumber.length !== 11) return false;
    phoneNumber = phoneNumber.slice(2);
  } else {
    return false;
  }

  if (phoneNumber[0] < "3" || phoneNumber[0] > "9") return false;

  for (let i = 0; i < phoneNumber.length; i++) {
    if (phoneNumber[i] < "0" || phoneNumber[i] > "9") return false;
  }

  return true;
}
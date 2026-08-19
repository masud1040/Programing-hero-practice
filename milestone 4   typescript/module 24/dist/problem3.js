"use strict";
// Function name must be: formatUserProfile
// Scenario
// A social media application stores basic information about its users. The application needs a function that converts a user's structured data into a human-readable profile summary. A user contains name, age, and city.
// Task
// First define an appropriate TypeScript type or interface for the user. Then create a function named formatUserProfile. The function should receive a user object and return a formatted sentence.
// Requirements
// Accept a properly typed user object.
// Return a string.
// Use the values from the object rather than hard-coding the result.
Object.defineProperty(exports, "__esModule", { value: true });
function formatUserProfile(user) {
    return `${user.name} is ${user.age} years old and lives in ${user.city}.`;
}
const store = formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka"
});
console.log(store);
//# sourceMappingURL=problem3.js.map
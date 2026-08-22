// Scenario
// A phone's settings screen shows a friendly battery status label instead of just the raw percentage.

// Task
// Create a function named getBatteryStatus. The function receives the battery percentage (0–100) and returns a status string.

// Status Rules
// Percentage
// Status
// 0–20
// "Low"
// 21–50
// "Medium"
// 51–90
// "High"
// 91–100
// "Full"


// Function Requirement
// Accept the percentage as a number.
// Return the status as a string.




function getBatteryStatus(percentage: number):string {
    
    if (percentage <= 20) {
        return "Low";
    } else if (percentage <= 50) {
        return "Medium";
    } else if (percentage <= 90) {
        return "High";
    } 
    else if (percentage <= 100) {
        return "Full";
    }   
}

console.log(getBatteryStatus(0));
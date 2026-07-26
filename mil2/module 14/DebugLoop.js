const numbers = [2, 5, 8, 11, 14, 17, 20];
let sum = 0;

//for (let i = 0; i <= numbers.length; i++) {     number.length -1 
for (let i = 0; i < numbers.length; i++) { 
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}

console.log(sum);

// Expected Output:
// 44


const text = "javascript";
let count = 0;

const vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < text.length; i++) {
  //if (vowels.includes(text)) {   bug  
  if (vowels.includes(text[i])) {
    count++;
  }
}

console.log(count);

// Expected Output:
// 3
function greet(name) {
  //console.log("Hello " + names); // name  hbe 
  console.log("Hello " + name); 
}

greet("Masud");

// Expected Output:
// Hello Masud

function total(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(total([10, 20, 30]));

// Expected Output:
// 60


console.log(new Date());
console.log(new Date().getFullYear());


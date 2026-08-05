let a = 10;
let b=20;
[b,a]=[a,b]


let nums = [10, 20, 30, 40, 50, 60, 70,20, 80, 90, 100];

let [first, ...rest]=nums;

let dup= new Set(rest);
console.log(rest);

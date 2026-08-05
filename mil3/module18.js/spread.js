let arr1 = [10, 20, 30, 40, 50];
let arr2 = [50, 60, 20, 90];

let margeArr = [...arr1,...arr2];
let newArr =new Set(margeArr);
console.log([...newArr]);

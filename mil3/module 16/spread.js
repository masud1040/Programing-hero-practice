let array= [10,20,30,40,50];
let height = Math.max(...array);
let minimum = Math.min(...array);


// console.log(height);
// console.log(minimum);


function sum (...rest){
    let sum =0;
    for (const element of rest) {
        sum+= element;
    }
    console.log(sum);
    
}
sum(1,2,3,4,5,6,7,8,9,10,11);
function sumavg(arr){
    let sum=0 ;
    for (let i = 0; i < arr.length; i++) {
        sum = sum+arr[i];
    }
const res= sum/arr.length;
console.log(res);

}
let arr=[1,2,3,4];
sumavg(arr);
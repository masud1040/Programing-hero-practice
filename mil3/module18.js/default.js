function  discount(dis=0,...price){
let sum =0;

for (const element of price) {
   sum+=element;

}

let discount = (sum*dis)/100;
let discounted = sum-discount;

return discounted;

}
console.log(discount(0,100));

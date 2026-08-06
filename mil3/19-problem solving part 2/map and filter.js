/*
  Problem 1: Bulk Discount Applier
  applyDiscount(prices, rate) — apply a discount % to every price in the
  array and return a NEW array. The ORIGINAL prices array must stay
  exactly the same.

  Input:
    prices = [500, 1000, 250]
    rate   = 10   (10% discount)

  Output:
    [450, 900, 225]

  Original prices array must remain [500, 1000, 250] afterwards.
*/

let applyDiscount=(price,discount)=>{

    let discountedprice= price.map((ele,ind,price)=>{
       
     const discountPriceafter = ele-(ele*discount)/100;
     return discountPriceafter

    })
    return discountedprice;


}

console.log(applyDiscount([500, 1000, 250],10));

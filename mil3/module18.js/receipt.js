/*
  Problem 2: Receipt Generator (Template Strings)
  Build a receipt generator using template strings — take item name,
  price, qty as input, output formatted multiline receipt.

  Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
*/ 

const receipt=(pen,qty,tk) =>{
    return `${pen} * ${qty} = ${qty*tk} taka`
}
console.log(receipt("pen",20,3));

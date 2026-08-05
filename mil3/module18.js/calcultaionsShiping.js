/*
  Problem 1: Arrow Function with Default Parameters & Logic
  Write an arrow function that calculates shipping cost based on
  order amount. Free shipping if amount >= 1000, otherwise charge
  a default fee 60 taka.

  Example: calculateShipping(1200) -> "Free Shipping"
  Example: calculateShipping(500) -> "Shipping Fee: 60 Taka"
  Example: calculateShipping(500, 100) -> "Shipping Fee: 100 Taka"
*/

const calculateShipping=(cost,fee=60) =>{

    
    return cost>=1200? `Free shipping`: `shipping fee : ${fee}`
       


}

console.log(calculateShipping(150,100));

// Problem 4 — Shopping Cart Calculator
// Concepts: object types, array types, reduce(), function parameter and return types
// Function name must be: calculateCartTotal
// Scenario
// An online shopping website stores each item in a customer's cart as an object containing its name and price. The store needs a function that calculates the total price of all products currently in the cart.
// Product Structure
// {
//     name: string;
//     price: number;
// }
// Task
// Create a function named calculateCartTotal. The function should receive an array of products and return the total price.
// Requirements
// Properly type the product object.
// Properly type the array of products.
// Return the total as a number.
// An empty cart should return 0.


// TODO: define a type for a single product
type Product = {
    name: string;
    price: number;
}
 
function calculateCartTotal(products: Product[]): number {
 
   const total = products.reduce((acc, product) => {
        return acc + product.price;
    }, 0);
 
    return total;

 
}

const products = [
    { name: "Keyboard", price: 1500 },
    { name: "Mouse", price: 800 },
    { name: "USB Cable", price: 300 }
];
console.log(calculateCartTotal(products));  
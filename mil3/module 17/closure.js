function cashCounter() {
  let ammount = 0;
  return function (pay) {
    ammount+=pay;
    return ammount;
  };
}

let coffe = cashCounter();
console.log(coffe(10));
console.log(coffe(12));


let cha = cashCounter();

console.log(cha(50));
console.log(cha(50));
console.log(coffe(12));

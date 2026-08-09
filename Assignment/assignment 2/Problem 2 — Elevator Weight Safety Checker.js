function isElevatorSafe(weights) {

  if (Array.isArray(weights)==false) {
    return "Invalid"
  }

  const capacity = 400;
  let totalWight =0;

for (const element of weights) {
    totalWight= totalWight+element;
  }
if (capacity>=totalWight) {
    return true 
}
  else if(capacity<totalWight){
    return  false 
  }
 

}

console.log(isElevatorSafe([400]));

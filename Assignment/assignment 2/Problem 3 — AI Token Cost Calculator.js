function calculateAiCost(tokensUsed) {
const type = typeof(tokensUsed);
if (type!=="number" || tokensUsed<0) {
    return "Invalid"
}

const remain = tokensUsed-500;
  if (remain<=0) {
    return 0
  }
  else{
    const divided =Math.floor(remain/100);
    const cost = divided*5;
    return cost 
    
  }

}

console.log(calculateAiCost("500"));

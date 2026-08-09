function bonusScore(scores) {
    if (!Array.isArray(scores) || scores.length==0) {
        return 'Invalid'
        
    }

  for (let score of scores) {
    if (typeof score != "number") {
      return "Invalid";
    }
  }
    let map= scores.map((ele,idx) =>{
        let  updateScore = ele+10;
        return updateScore
    })

let sum = map.reduce((acc, cur)=>{
return acc+cur
},0)
   return sum
}


console.log(bonusScore([80, 65, 90, 75]
));

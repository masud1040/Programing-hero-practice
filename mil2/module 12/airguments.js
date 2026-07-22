function sum ( a,b){
    const  result = a+b;
    console.log("sum of",a,"+",b,"=",result);
}

function mainus (a,b){
     const result= a-b;
     console.log(a,"-",b,"=",result);
     
}

function multify(a,b){
    return a*b;
}

sum(5,10);
mainus(20,10);
console.log("a,b multify = ",multify(10,9));

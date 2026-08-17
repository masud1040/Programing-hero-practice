function sum(a:number | string, b:number):number{
    if (typeof a ==='string') {
        a=parseFloat(a)
        
    }
 const res =a+b
 return res
}

console.log(sum(2,2));

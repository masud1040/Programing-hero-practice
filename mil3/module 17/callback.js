function sum(a,b,cb){
    let sum = a+b;
    cb(sum);
}

function display(res){
    console.log(res);
    
}

sum(4,5,display)
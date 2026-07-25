function num(a) {
    if (a % 3 == 0 && a % 5 == 0) {
        console.log("fizzBUzz");
    } 
    else if (a % 3 == 0) console.log("Fizz");

    else if(a%5==0){
        console.log("Buzz");
        
    }
else{
    console.log(a);
    
}


}
num(20);

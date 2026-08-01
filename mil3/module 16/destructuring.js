//  arrary destructuring 
  const  array= [10,20,30,40];
   
const  [one,two,,four]= array;
// console.log(one,two);


//obj destructuring 

const stu ={
    name:"saiful",
    roll:39399,
    address: 'banshkhali',
    marks :{
        math:49,
        english:494
    }
}


const {name,roll,marks:{math}}= stu;

console.log(roll,math);

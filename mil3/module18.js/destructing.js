/*
  Problem 1: Nested Response Extractor
  Extract specific fields from a nested API-like response object using
  destructuring, with renaming + default value.

  Example: { user: { name: "Rafi", age: 22 } } -> extract name as
  userName, default age = 18 if missing
*/

const  response =(obj)=>{

    const {user:{name:username,age=18}} = obj;
    console.log(username,age);
    

}
response({ user: { name: "Rafi",  } })
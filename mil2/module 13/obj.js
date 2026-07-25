const stu = {
  name: "Saiful Alam Masud",
  age: 27,
  university: "Chittagong Polytechnic Institute",
  department: "Computer Science & Technology",
  email: "masud@example.com",
};

function printObject(obj) {
  // only key
  for (let key in obj) {
    console.log(key);
  }

  //only value
  for (let key in obj) {
    console.log(obj[key]);
  }

  // key : value
  for (let key in obj) {
    console.log(key, ":", obj[key]);
  }

  //total property 
  let keyCount = Object.keys(obj).length;
  console.log("Total Keys:", keyCount);

  // email 
let email= obj.hasOwnProperty("email");
console.log(email);

}

printObject(stu);
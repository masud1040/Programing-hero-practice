function studentIntroduction(student) {
  if (typeof student !="object" || !student.name || student.age==null || student.course==null) {
   return "Invalid"
  }

  return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
}

let student ={
  name: "Rafi",
  age: 18,
  course: "JavaScript"
}

console.log(studentIntroduction(student));

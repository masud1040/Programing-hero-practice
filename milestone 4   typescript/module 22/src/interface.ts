interface student {
  name: string;
  age: number;

  gpa?: number;
}
const robin: student = {
  name: "robin",
  age: 33,
};

const robin2: student = {
  name: "robin2",
  age: 33,
  gpa: 5.0,
};
const team: student[] = [robin, robin2,{
    name: "robin3",
    age: 33,
    gpa: 5.0,
}];

function printStudent(student: student): void {
  console.log(student.name);
}
printStudent(robin);
printStudent({name:"masud", age: 44,gpa:5.0});
const creatStudent = (name: string, age: number, gender: string) => {
  return {
    name,
    age,
    gender,
  };
};

const student = creatStudent("John", 20, "Male");
console.log(student);   // { name: 'John', age: 20, gender: 'Male' }
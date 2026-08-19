class Student {
    name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name=name;
        this.age=age;
        this.gender="Male";
    }
    
}
const student=new Student("John",20,"Male");
console.log(student);
student.age=21;
console.log(student);
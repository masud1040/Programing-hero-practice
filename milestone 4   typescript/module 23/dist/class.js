"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = "Male";
    }
}
const student = new Student("John", 20, "Male");
console.log(student);
student.age = 21;
console.log(student);
//# sourceMappingURL=class.js.map
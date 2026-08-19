"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const creatStudent = (name, age, gender) => {
    return {
        name,
        age,
        gender,
    };
};
const student = creatStudent("John", 20, "Male");
console.log(student); // { name: 'John', age: 20, gender: 'Male' }
//# sourceMappingURL=object.js.map
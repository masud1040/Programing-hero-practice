"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const robin = {
    name: "robin",
    age: 33,
};
const robin2 = {
    name: "robin2",
    age: 33,
    gpa: 5.0,
};
const team = [robin, robin2, {
        name: "robin3",
        age: 33,
        gpa: 5.0,
    }];
function printStudent(student) {
    console.log(student.name);
}
printStudent(robin);
printStudent({ name: "masud", age: 44, gpa: 5.0 });
//# sourceMappingURL=interface.js.map
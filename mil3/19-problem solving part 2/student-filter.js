/*
  Problem 2: Passing Students Filter
  getPassingStudents(students, threshold) — return only the students
  whose marks are greater than or equal to the given threshold.

  Input:
    students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 60 },
    ]
    threshold = 60

  Output:
    [
      { name: "Rafi", marks: 75 },
      { name: "Utsho", marks: 60 },
    ]
*/


let getPassingStudents=(students, threshold) =>{

    let student = students.filter(student=>{
        if (student.marks>=threshold) {
            return true
        }
        else {
            return false
        }
    })

return student

}

const obj =  students = [
      { name: "Rafi", marks: 75 },
      { name: "Karim", marks: 40 },
      { name: "Utsho", marks: 6 },
    ];

console.log(getPassingStudents(obj,60));

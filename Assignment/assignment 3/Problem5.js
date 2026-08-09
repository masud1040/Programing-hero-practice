/* Find and fix every bug. Do not change the function name. */
function generateLeaderboard(students) {
  if (!Array.isArray(students)) {
    return "Invalid";
  }

  if (students.length == 0) {
    return "Invalid";
  }
  for (let student of students) {
    if (student.name === undefined || student.score === undefined) {
      return "Invalid";
    }

    if (typeof student.score != "number") {
      return "Invalid";
    }
  }
  
  const qualified = students.filter((student) => {
    return student.score >= 70;
  });

  const names = qualified.map(({ name }) => {
    return name.toUpperCase();
  });

  return names.slice(0, 3);
}

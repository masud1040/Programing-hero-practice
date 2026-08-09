function filterActiveUsers(users) {
  if (!Array.isArray(users) || users.length == 0 ) {
    return "Invalid";
  }

  for (let user of users) {
    if (user.isActive === undefined) {
      return "Invalid";
    }
  }

  let filters = users.filter((student) => {
    if (student.isActive==true) {
      return true;
    } else {
      return false;
    }
  });
  return filters;
}


let user = [
  { name: "A", isActive: true },
  { name: "B", isActive: false },
];

console.log(filterActiveUsers(user));

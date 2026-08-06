/*
  Problem 1: User Lookup by ID
  findUserById(users, id) — find and return the single user object
  whose id matches. If no user matches,returns "User not found".

  Input:
    users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ]
    id = 2

  Output:
    { id: 2, name: "Karim" }
*/


let findUserById=(users, id)=>{
    let exp= users.find(user=>{
        return user.id === id
    })
if (exp) {
    return exp
}
else{
    return "user not found "
}
}

let users = [
      { id: 1, name: "Rafi" },
      { id: 2, name: "Karim" },
    ];

console.log(findUserById(users,12));

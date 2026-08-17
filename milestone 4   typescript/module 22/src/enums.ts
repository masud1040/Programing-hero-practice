enum day{
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
}
console.log(day.monday);
console.log(day.thursday);

enum role{
    admin ="admin",
    user = "user",
    moderator = "moderator"

}
console.log(role.admin);

const newAdmin = {
    name:"Masud",
    role:role.admin
}
console.log(newAdmin);


enum priorities{
    low,
    medium,
    high
}



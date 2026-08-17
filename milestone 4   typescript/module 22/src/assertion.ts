const data: User = {
    name: "Masud",
    age: 10
} as const;

data.age = 100;

interface User {
    name: string;
    age: number;
}



let DataUser = data as User;


console.log(DataUser.age);
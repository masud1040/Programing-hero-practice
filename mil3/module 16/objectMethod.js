const stu ={
    name : "mumu",
    roll : 4994,
    section : "a1"
}
const key= Object.keys(stu);
const val= Object.values(stu);
const ent= Object.entries(stu);
console.log(key);
console.log(val);
console.log(ent);


for (const element of ent) {
    const  [key,val] =ent;
    console.log(key,val);
    
    
}

Object.seal(stu)
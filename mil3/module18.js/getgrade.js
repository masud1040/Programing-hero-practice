const grade=(mark) =>{
    return typeof mark!="number"? "invalid": mark>=90?"A+":mark>=80?"a":'fail';
}
console.log(grade(69));


function comp(arr){
    let large= 0;
    let small= arr[0];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element>large) {
            large=element;
        }
        else if (element<small){
            small= element
        }
        
    }
    console.log("largeest number is",large);
    console.log("smallest number is ",small);
    
    
    
}
const arr =[3,44,314,55];
comp(arr)
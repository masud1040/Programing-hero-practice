function pali(arr){

    let reverseStr='';

    for (let element of arr) {
        reverseStr=element+reverseStr;
    }

    if (str==reverseStr) {
        console.log("Yes");
        
    }
    else{
        console.log("not Palindrom");
        
    }

}

const str = 'mnham';

pali(str);


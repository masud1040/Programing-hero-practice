function countHashtags(caption) {
    if (typeof caption !="string") {
        return  "Invalid"
    }
let count =0;
 let splitCaption =  caption.split(" ");

 let filterstring = splitCaption.filter(word=>{
    if (word.startsWith("#")) {
      return true;
    } else {
      return false;
    }
 })
count = filterstring.length;


let longTag= ""

for (const element of filterstring) {
    let tag = element.slice(1)
    if (tag.length >=longTag.length) {
        longTag= tag
    }
    
}
return {
    hashtagCount: count,
    longestTag: longTag
};


}

const str ="Loving this weather today #sunny #vibes #weekend"
console.log(countHashtags(str));

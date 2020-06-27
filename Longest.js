function findLongestWordLength(str){
    var array = [];
    array = str.split(" ");
    var c=array[1].length;
    var len=array.length;
    for (let i=0 ; i<len ; i++){
        if (c < array[i].length){
            c=array[i].length;
        }
    }
    return c;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//this function about Find the Longest Word in a String.
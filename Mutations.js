Mutations = (arr)=>{
    var test =arr[0].toLowerCase();
    var target = arr[1].toLowerCase();
    for(let i in arr){
       if  (target.indexOf(test[i])<0) return false;

    }
    return true; 

}
console.log(mutation(["hello", "hey"])); // return true .
// this function Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
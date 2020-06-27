chunkArrayInGroups = (arr, size) =>{
    var temp =[];
    var result =[];

    for (let i in arr){
        if (i % size !== size-1) temp.push(arr[i])
        else{
            temp.push(arr[i]);
            result.push(temp);
            temp=[];
        
        }
    }

   if (temp.length != 0) result.push(temp)
   return result;

}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)) // return [ [ 'a', 'b' ], [ 'c', 'd' ] ].
// function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
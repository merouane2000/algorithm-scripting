getIndexToIns = (arr, num) =>{
    var count = 0;
    for (let i in arr){
        if (num > arr[i]){
            count++
        }
    }
    return count;
}
console.log(getIndexToIns([40, 60], 50));// return 1.
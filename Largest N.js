function largestnumber(arr){
    var c = [];
    for (let i=0 ; i< arr.length ; i++){
        larg = arr[i][0];
        for(let j=1 ; j<arr[i].length ; j++){
            if (arr[i][j]>larg){
                larg=arr[i][j];
            }
        } 
        c[i] = larg;

    }
    return c;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// this funtion should return [ 5, 27, 39, 1001 ]  the largest number from each provided sub-array.
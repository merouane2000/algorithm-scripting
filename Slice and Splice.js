frankenSplice=(arr1, arr2, n)=>{
    var localArr = arr2.slice();
    for (let i in arr1){
        localArr.splice(n , 0 , arr[i]);
        n++;
    }
    return localArr;

}
console.log(frankenSpliceMT([1, 2, 3], [4, 5, 6], 1));// return [ 4, 1, 2, 3, 5, 6 ].
//another function .
frankenSplice1 = (arr3,arr4,n5)=>{
    let AlocalArr2 = arr4.slice();
    AlocalArr2.splice(n , 0 , ...arr3);
    return AlocalArr2;
}
console.log(frankenSpliceMT([1, 2, 3], [4, 5, 6], 1)); // return [ 4, 1, 2, 3, 5, 6 ].
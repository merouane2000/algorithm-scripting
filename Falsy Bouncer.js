bouncer = (arr) => {
    var newArr = [];
    for (let i in arr){
        if (arr[i]) newArr.push(arr[i]);
    }
    return newArr;

}
console.log(bouncer([7, "ate", "", false, 9])); //Return [ 7, 'ate', 9 ].
// this function removes the boolean values from arrys .

bouncerMT = (arr1) => {
    return arr1.filter(Boolean);
}
console.log(bouncerMT([7, "ate", "", false, 9])); //Return [ 7, 'ate', 9 ].

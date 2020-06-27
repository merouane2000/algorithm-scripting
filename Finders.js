function findElement(arr, func) {
    let num=0;
    for (let i=0 ; i<arr.length ; i++){
        num= arr[i];
        if (runc(num)){
            return num;
        }
    }
    return undefined;

}
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0))//return 2.
//this function returns the first element in the array that pass the test, if no elemnts passes the test return undefined.
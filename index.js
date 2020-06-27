console.log("hello world");
console.clear();
//an array in js 
let myArray = [true,null,"string",55,undefined];
console.log(myArray);
//Access an Array's Contents 
myArray[2]="kimpo";
// unsift and push 
function addbgnend(arr){
    arr.unshift('three',55);//in the beginning
    arr.push(55,'CIII');//in the end 
    return arr;
}
//opposite of unshift =! shift-- push =! pop
function remove(arr){

    let popped = arr.pop();//remove the end  items
    let shifted = arr.shift(); // remove the beginning items 
    return [popped,shifted]; 
}
console.log (remove(['challenge', 'is', 'not', 'complete']));
//splice 
let arr=[1,5,7,987,15,87,87,8,45];
arr.splice(1,4);
console.log(arr);
//slice 
function extract(arr){
    return arr.slice(2,4);
}
console.log(extract(['kiko',545,564,8,8,'seal']))//return [564,8]
//Spread Operator
function copiearr(arr,n){
    let newArr= [];
    while(n >=1){
        newArr.push([...arr]);
        n--;   // spred or copie an array = ...
    }
    return newArr;
}
console.log(copiearr(['true',5,'hello'],5));


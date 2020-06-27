function Factorializenum(num){
    if (num===0){
        return 1;
    }
    else{
        return num*Factorializenum(num-1);
    }
    
}
console.log(Factorializenum(50));
// this function work as Factorialize a Number with recursion .
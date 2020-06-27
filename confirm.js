function confirmEnding(str, target){
    return str.slice(str.length - target.length)===target;
}
console.log(confirmEnding("Bastian", "n"));
//We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
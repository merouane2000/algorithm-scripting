function titleCase(str){
    var convet = str.toLowerCase.split(" ");
    var result = convert.map(function(val){
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    })
    return result.join(" ");

}
console.log(titleCase("I'm a little tea pot")); //return I'm A Little Tea Pot.
//function return string with the first letter of each word capitalized.
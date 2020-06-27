function repeatStringNumTimes(str, num){
    if (num<=0){
        return "";
      
        }
        var str1=""; //empty str memory.
        for (let i=0 ; i<num ; i++){
            str1=str1+str;}
            return str1;

    }
    console.log(repeatStringNumTimes("abc", 3)); //return abcabcabc.
    //function repeating string without repeat method.

    function repeatStringNumTimes1 (str2, num2){
        return str.repeat([num]);
    
    }
    console.log(repeatStringNumTimes("abc", 3)); //return abcabcabc.
     //with repeat method.
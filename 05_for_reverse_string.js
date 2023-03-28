


var reverseString= function(str){
var reverse="";
for(let i=str.length-1;i>=0;i--)
{
var charAt = str.charAt(i);
reverse=reverse + charAt;
}
return reverse;
}
var result = reverseString("Do it anyhow");
console.log(`Reverse string is: ${result}`);





var reverseStr= function(str){ //str = do it anyhow
    var reverse="";//wohyna
    for(let i=str.length-1;i>=0;i--)
    {
    var char = str.charAt(i);//"o"
    
        if(char==" ")
            break;
        reverse=reverse + char; //"w"+"o==> "WO"
    }
    return reverse;
    }
    var result = reverseStr("Do it anyhow");
    console.log(`Reverse string is: ${result}`);


    // I am angular champ
    var str ="I am angular champ";
    var count =0 ;
    for(let index=0;index<str.length;index++)
    {
        var char=str.charAt(index);
        if(char == " ")
        count = count + 1;
        //console.log(s);
    }
    console.log("Total number of spaces is:",count);


    var str ="I am angular champ";
    var count =0 ;
    for(let index=0;index<str.length;index++)
    {
        var char=str.charAt(index);
        if(char == "a" || char == "e" || char == "I"  || char == "0" || char == "u" )
        count = count + 1;
        //console.log(s);
    }
    console.log("Total number of vowels is:",count)
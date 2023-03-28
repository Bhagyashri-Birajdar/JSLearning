console.log("==========Vowel counting==========");


var vowelCount= function(str)
{
    var count=0;
    for (let index = 0; index < str.length; index++) {
       
       var char=str.charAt(index);
        if(char=='a' || char=='e' || char=='i' ||char=='I' || char=='o' || char=='u')
        count= count + 1;
               
    }
    console.log(`Number of vowels in ${str} are:${count}`);
}
vowelCount("Javascript is the language of Internet");// ? is alphabet and small letter vowels are calculted in it ?
vowelCount("I am angular developer");
vowelCount("Hard work and commitment is the key of success");


console.log("=====Count total characters in last word of given string=====");
var countChar= function (str)
{
    var word="";
    for (let index =str.length-1; index>=0; index--) {
        var char=str.charAt(index);
        if(char == " ")
        break;
        word=word+char;
        var lengthOfWord=word.length;
    }
    return lengthOfWord;
   }
var result=countChar("Javascript is the language of Internet");// ? is alphabet and small letter vowels are calculted in it ?
console.log(`Length of last word is: ${result}`);
var result=countChar("I am angular developer");
console.log(`Length of last word is: ${result}`);
var result=countChar("Hard work and commitment is the key of success");
console.log(`Length of last word is: ${result}`);
console.log("=====Find the greater number using function with arguments and no return value:=====");
function greaterNumber(value1, value2)
{
    var result = value1 > value2 ? value1:value2;
    console.log(`Greater number among ${value1} and ${value2}  is: ${result}`);    
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("=====Check even or odd number using function expression with argument and return value:=====");
function isEvenOrOddNum(number)
{
    var result2 = (number%2==0) ? true : false;
    return result2 ;
    
}
var result = isEvenOrOddNum(29);
console.log(`29 number is even or odd -->Even=true , Odd=false: ${result}`);

console.log(`44 number is even or odd -->Even=true , Odd=false: ${isEvenOrOddNum(44)}`);

console.log(`0 number is even or odd -->Even=true , Odd=false: ${isEvenOrOddNum(0)}`);
var result = isEvenOrOddNum(101);
console.log(`101 number is even or odd -->Even=true , Odd=false: ${result}`);

console.log("=====Check even or odd length of word with argument and return value:=====");
function wordLength(word)
{
    var lengthOfWord = word.length % 2==0 ? "Even":"Odd";
    console.log(`${word} has Length of ${word.length}.`);    
    return lengthOfWord;
}
var result=wordLength("Java Script");
console.log(`Length is ${result} number.`);

var result=wordLength("developer");
console.log(`Length is ${result} number.`);

var result=wordLength("Google");
console.log(`Length is ${result} number.`);
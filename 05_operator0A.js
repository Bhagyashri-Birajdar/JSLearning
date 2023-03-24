console.log("=====Find the greater number using function with arguments and no return value:=====");
function greaterNumber(value1, value2)
{
    var result = value1 > value2 ? `${value1} is greater`:`${value2} is greater`;
    console.log(`Greater number is: ${result}`);    
}

greaterNumber(10,-10);
greaterNumber(800,899);
//console.log(`Greater number is: ${result}`);
console.log("=====Check even or odd number using function expression with argument and return value:=====");
function isEvenOrOddNum(number)
{
    var result2 = (number%2==0) ? "Even number" : "Odd number";
    console.log(`Given number ${number} is ${result2}`);
    return true ;
    
}
var result = isEvenOrOddNum(29);
console.log(`${result}`);
var result = isEvenOrOddNum(44);
console.log(`${result}`);
var result = isEvenOrOddNum(0);
console.log(`${result}`);
var result = isEvenOrOddNum(101);
console.log(`${result}`);

console.log("=====Check even or odd length of word with argument and return value:=====");
function wordLength(word)
{
    var lengthOfWord = word.length % 2==0 ? "Even":"Odd";
    console.log(`Length of ${word} is ${word.length}`);
    return lengthOfWord;
}
var result=wordLength("Java Script");
console.log(`Length is ${result} number`);

var result=wordLength("developer");
console.log(`Length is ${result} number`);

var result=wordLength("Google");
console.log(`Length is ${result} number`);
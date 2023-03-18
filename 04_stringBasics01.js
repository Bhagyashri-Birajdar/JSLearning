console.log("Function with no arguments and no return type");
function stringBasics()
{
console.log("**********Step 1**********");
var str1="My dream company is Infosis";
console.log(str1);

console.log("**********Step 2**********");
var hobby1="1.Reading,";
var hobby2="2.Singing,";
var hobby3="3.Gaining knowledge";

console.log("My hobbies are:",hobby1,hobby2,hobby3);

var hobby1Length=hobby1.length;
console.log("Total number of characters in Hobby1 are:",hobby1Length);
var hobby2Length=hobby2.length;
console.log("Total number of characters in Hobby2 are:",hobby2Length);
var hobby3Length=hobby3.length;
console.log("Total number of characters in Hobby3 are:",hobby3Length);

var hobbies = hobby1 + hobby2 + hobby3;
var hobbiesLength=hobbies.length;
console.log("Total number of characters in hobby1, hobby2, hobby3 are:",hobbiesLength);

}
stringBasics();

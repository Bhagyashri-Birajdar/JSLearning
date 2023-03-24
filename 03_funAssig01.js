console.log("**********step 1**********");
//function with no arguments and no return value

function showAim()
{
    console.log("My aim is:To travel foreign countries");
}
showAim();

function displayHobbies()
{
    console.log("My hobbies are:reading,singing,gaining knowledge");
}
displayHobbies();

console.log("**********step 2**********");

function personalDetails(firstName,lastName,collegeName)
{
    console.log("My personal details are:",firstName,lastName,collegeName);
}
personalDetails("Bhagyashri","Birajdar","WIT_Solapur");

console.log("**********step 3**********");
//function with arguments and no return value
var actor1="Virat";
var actor2="Anushka";

var num1=1000;
var num2=2000;
function swapValuesDude(value1,value2)
{
console.log("Before swap:",value1,value2);
var temp=value1;
value1=value2;
value2=temp;
console.log("After swap:",value1,value2);
}
swapValuesDude(actor1,actor2);

swapValuesDude(num1,num2);


console.log("**********step 4**********");
//function with arguments and return value
function addThreeValues(para1,para2,para3)
{
    var sum = para1 + para2 + para3;
    return sum;
}
var result1=addThreeValues(10.23,600,40);
console.log("Addition of three values is:",result1);

var result2=addThreeValues("Hello","Good","Morning");
console.log("Combination of three values is:",result2);
console.log("=====Check given number is even or odd using if block=====");
function checkEvenOrOdd(value)
{
    if(value%2==0)
    {
        return "even";
    }
    if(value%2!=0)
    {
        return "odd";
    }
}
var result = checkEvenOrOdd(45);
console.log(`Given number 45 is ${result}`);
var result = checkEvenOrOdd(70);
console.log(`Given number 70 is ${result}`);
var result = checkEvenOrOdd(67);
console.log(`Given number 67 is ${result}`);
var result = checkEvenOrOdd(98);
console.log(`Given number 98 is ${result}`);


console.log("=====Check eligibility for voting using if block=====");
function checkEligibilityForVoting(age)
{
    if(age>=18)
    {
        console.log(`You are eligible for voting`);
        console.log(`Age is ${age}`);
    }
    if(age<18)
    {
        console.log(`You are not eligible for voting`);
        console.log(`Age is ${age}`);
    }
}
checkEligibilityForVoting(18);
checkEligibilityForVoting(20);
checkEligibilityForVoting(17);
checkEligibilityForVoting(40);

console.log("=====Check string contains more then 10 characters or not=====");
function checkStringLength(string)
{
    var stringLength=string.length;
    if(stringLength>10){
       console.log(`Given String ${string} contains more than 10 characters`);
    }
    if(stringLength<=10){
        console.log(`Given String ${string} does not contain 10 characters`);
    }
}
checkStringLength("JavaScript-ES6");
checkStringLength("Bootstrap");


console.log("=====Check if string starts with Java=====");
function startWithJava(string)
{
    var index =string.indexOf('Java');
    if(index==0)
    {
        console.log(`Given string ${string} starts with Java`);
    }
    if(index!=0)
    {
        console.log(`Given string ${string} does not starts with Java`);
    }
}
startWithJava("JavaScript Language");
startWithJava("Core Java Language");


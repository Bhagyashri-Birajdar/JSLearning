console.log(`Start`);
var num=10;
if (num>0){
    console.log(`inside if`);
    console.log(`number is positive ${num}`);
}
console.log(`End`);

var ageForVote = 20;
if(ageForVote >= 18){
    console.log("You are eligible for voting");
        console.log(`Age is ${ageForVote}`);
}
console.log("End of next if block");

function checkEvenOdd(num)
{
if(num%2==0){
    return "Even";
}

    if(num%2!=0){
        return "Odd";
    
    }
}
var result=checkEvenOdd(45);
console.log(`Given number 45 is ${result}`);
var result=checkEvenOdd(50);
console.log(`Given number 50 is ${result}`);

var num1=5;
if(num1>0)
{
    console.log(`Number ${num1} is positive.`);
} else {
    console.log(`Number ${num1} is negative.`);
}

console.log("=====Check maleMarriageEligibility=====");
function maleMarriageEligibility(gender,age,boyName)
{
    if(gender=="male" && age>=21){
        console.log (`Hey, ${boyName}you are eligible for marriage`);
    } else{
        console.log (`you are not eligible for marriage`);
    }
}
maleMarriageEligibility("male",25,"Bill Gates");
maleMarriageEligibility("male",17,"Steve Jobs");



console.log("======Check femaleMarriageEligibility=====");
function femaleMarriageEligibility(gender,age,girlName)
{
    if(gender=="female" && age>=18){
        console.log (`you are eligible for marriage`);
    } else{
        console.log (`you are not eligible for marriage`);
    }
}
femaleMarriageEligibility("female",16,"Jennifer");
femaleMarriageEligibility("female",27,"Malinda Gates");

console.log("=====Chck TCS interview eligibility with no return value=====");
function tcsInterviewEligibility(gradScore,hscScore,sscScore,candidateName)
{
    if(gradScore>=70 || hscScore>=80 ||  sscScore>=90){
        console.log(`${candidateName},you are eligible for TCS interview`);

    }else{
console.log(`${candidateName},Unfortunately,you are not eligible for interview`);
    }
}
tcsInterviewEligibility(80,86,90,"Bhagyashri");
tcsInterviewEligibility(70,65,55,"Suraj");
tcsInterviewEligibility(60,79,88,"Shrikrishna");

console.log("=====Find the greater number =====");
function greaterNumber(value1, value2)
{
    if(value1 > value2 )
{console.log( `${value1} is greater`);
} else{
    console.log(`${value2} is greater`);
}
    
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log("=====Check even or odd number using function expression=====");
function isEvenOrOddNum(number)
{
    if(number%2==0) 
    {
        console.log(`${number} is even or odd -->Even=true , Odd=false:true`);
    }else{
console.log(`${number} is even or odd -->Even=true , Odd=false:false`);
    }
        
}
isEvenOrOddNum(29);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
isEvenOrOddNum(44);

console.log("=====Check even or odd length of word =====");
function wordLength(word)
{
    if(word.length % 2==0){
        console.log(`${word} has Length of ${word.length} is even number.`);   
    }else{
        console.log(`${word} has Length of ${word.length} is odd number.`);   
    }
}    
wordLength("Java Script");
wordLength("developer");
wordLength("Google");   

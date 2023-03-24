console.log(`===Arithmatic Operator===`); 
var num1 = 10;
var num2 = 2;
var result = num1 + num2;
console.log(`Addition is ${result}`);


var result2 = num1- num2;
console.log(`subtraction is ${result2}`);

result2 = num1 * num2;
console.log(`Multiplication is ${result2}`);

result2 = num1 **  num2;
console.log(`Exponential is ${result2}`);

result2= num1/3;
console.log(`Division is ${result2}`);

result2= num1%3;
console.log(`Reminder is ${result2}`);

var num=20;
num+=20;
console.log(`Compund addition +${num}`);

console.log("Comparision operators");
var num3 = "10";
var num4 = 10;

console.log(num3=num4);
console.log(num3==num4);
console.log(num3 === num4);

console.log(num3!=num4);

console.log(10>20);
console.log(10<20);
console.log(10<10);

var marks=30;
console.log(marks>=30);

var marks =78;
var result= marks>=60 ? "Allow him for interview" : "Dont allow him for interview"
console.log(result);

var age=22;
var res= age>=21 ? true:false;
console.log(res);

console.log("Check Even or Odd");
var myNumber=7;
console.log(myNumber%2==0);
var result= myNumber%2==0 ? "EVEN": "ODD";
console.log(result);

function wordLength(word)
{
    var wordLength = word.length;
    var result = wordLength %2==0 ? "Even ":"Odd";
    return result;
}
 var result = wordLength("Javascript");
 console.log(`Word"Javascript"has  ${result} length`);
 console.log(`Word "Google" has ${wordLength("Google Chrome").length}`);
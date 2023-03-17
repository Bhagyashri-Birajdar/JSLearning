//function with no arguments and no return value
// function showFullNAme(){
//     console.log("My full name is:Bhagyasjri Birajdar");

// }
// showFullNAme(); //Function call or invoke

// //function with arguments and no return value
// function showAge(age){
// console.log("My age is:",age);
// }
// showAge(32);

// //function with no arguments and return value

// function fullName(){
//     var name="Bhagyashri Birajdar";
//     return name;
// }
// var fname=fullName();
// console.log("My full name is:",fname);

// //function with  arguments and return value
// function sumOfNums(num1,num2,num3) {
//     var sum=num1+num2+num3;
//     return sum;
    
// }
// var sumResult=sumOfNums(10,20,30);
// console.log(sumResult);


var num1=100;
var num2=200;

var str1="sweety";
var str2="cutie";

var name1 = "Suraj";
var name2 = "Arjun";
function swapVariables(value1,value2){
    console.log("Before swap:",value1,value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After swap:",value1,value2);
    return "swapping variables successfully completed";
}
var result1 = swapVariables(num1,num2);
console.log(result1);

var result2 = swapVariables(str1,str2);
console.log(result2);

var result3=swapVariables(name1,name2);
console.log(result3);

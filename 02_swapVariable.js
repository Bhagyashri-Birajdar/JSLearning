console.log("**********step 1**********");
var sweety="Sweety";
var cutie="Cutie";

console.log("Before swapping:");
console.log("value of sweety is:",sweety);
console.log("value of cutie is:",cutie);

var temp=sweety;
sweety=cutie;
cutie=temp;
console.log("After swapping:");
console.log("value of sweety is:",sweety);
console.log("value of cutie is:",cutie);

console.log("**********step 2**********");
var num1=100;
var num2=200;
var num3=300;

console.log("Before swapping:");
console.log("value of num1 is:",num1);
console.log("value of num2 is:",num2);
console.log("value of num3 is:",num3);

var temp1=num1;
var temp2=num2;
var temp3=num3;

console.log("After swapping num1 with num2:");
num1=num2;
num2=temp1;
console.log("value of num1 is:",num1);
console.log("value of num2 is:",num2);

num2=num3;
num3=temp2;
console.log("After swapping num2 with num3:");
console.log("value of num2 is:",num2);
console.log("value of num3 is:",num3);

num3=temp1;
num1=temp3;
console.log("After swapping num3 with num1:");
console.log("value of num3 is:",num3);
console.log("value of num1 is:",num1);

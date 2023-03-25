console.log("Convert number strings and boolean values to number");

//string to number
result = Number(`324`);
console.log(result);
result = Number(`324e-1`);
console.log(result);

//boolean to number
result = Number(true);
console.log("true ==>",result);
result = Number(false);
console.log("false ==> ",result);

console.log("Invalid string to number returns Nan");
result = Number('hello');
console.log("hello ==>",result);
result = Number(undefined);
console.log("undefined ==>",result);
result = Number(NaN);
console.log("NaN ==>",result);

console.log("String to number using + operator");
var numberInString = "100";
//  var a = "100";
console.log(typeof numberInString );
var myNumber = +numberInString;
//  var b = +a;
// console.log(b);
console.log(typeof myNumber);
console.log(myNumber);

console.log("number to string data type using toString() method");
var myNumber = 100;
console.log(typeof myNumber);
var afterConversion = myNumber.toString();
console.log(typeof afterConversion);
console.log(afterConversion);
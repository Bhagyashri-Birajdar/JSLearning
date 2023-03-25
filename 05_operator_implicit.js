console.log("Implicit conversion to string");
//numeric string used with + gives string type
let result;
 //console.log(result);
result='3' + 2;
console.log("'3' + 2 ==>",result);
result='3' + true;
console.log("'3' + true ==>",result);
result= '3' + undefined;
console.log("'3' + undefined ==>",result);
result = '3' + null;
console.log("'3' + null ==>",result);


console.log("Implicit boolean conversion to number");
//true is 1, false is 0
result = '4' - true ;
console.log("'4' - true ==>",result);

result = 4 + true ;
console.log("4 + true ==>",result);

result = 4 + false ;
console.log("4 + false ==>",result);

console.log("Implicit string conversion to number");
//numeric string used with -,/,* gives number type

result = '4' - '2';
console.log("'4' - '2' ==>",result);

result = '4' - 2;
console.log("'4' - 2 ==>",result);

result = '4' * '2';
console.log("'4' * 2 ==>",result);

result = '4' / 2;
console.log("'4' / 2 ==>",result);

console.log("Undefined used with number,boolean or null given NaN");
//Arithmetic operation of undefined with number,boolean or null given NaN
result = 4 + undefined;
console.log("4 + undefined ==>", result);

result = 4 - undefined;
console.log("4 - undefined ==>", result);

result = true + undefined;
console.log("true + undefined ==>", result);

result = null + undefined;
console.log("null + undefined ==>", result);


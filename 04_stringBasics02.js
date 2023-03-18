console.log("***    Function with no arguments and no return type   ***");

function stringHandsOn()
{
var str1=" Hey you are doing good,keep it up ";
console.log("Given string is: Hey you are doing good,keep it up");

var lengthOfStr1=str1.length;
console.log("Length of string is:",lengthOfStr1);

var stringAfterTrim=str1.trim();
console.log("string after trim is:",stringAfterTrim);

var lengthOfstringAfterTrim=stringAfterTrim.length;
console.log("Length of string after trim is:",lengthOfstringAfterTrim);

var count=lengthOfStr1-lengthOfstringAfterTrim;
console.log("Total extra spaces removed from string=",count);
 
var charAtLastIndex = stringAfterTrim.charAt(lengthOfstringAfterTrim-1);
var charAtzeroIndex = stringAfterTrim.charAt(0);
console.log("First and last character after trim:",charAtzeroIndex,charAtLastIndex);

var splitResult=stringAfterTrim.split(" ");
console.log("split method gives length and splits words:");
console.log(splitResult);
console.log("Count of total words available after trim is:",splitResult.length);

console.log("Index of 'Good' Word:",stringAfterTrim.indexOf('good'));

var subStringResult=stringAfterTrim.substring(22,33);
console.log("substring starting from index 22 using substring method:",subStringResult);
var sliceResult=stringAfterTrim.slice(22,33);
console.log("substring starting from index 22 using slice method :",sliceResult);

console.log("Is string ends with word 'up'?",stringAfterTrim.endsWith('up'));
console.log("Is string starts with word 'Hey'?",stringAfterTrim.startsWith('Hey'));
}
stringHandsOn();

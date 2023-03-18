var greet="Good morning";
console.log(typeof greet);

console.log("Total number of characters available in this string Greet are:");
var greetLength=greet.length;
console.log("TOtal length of string is:",greetLength);

console.log("Find the character by index value:");
var charAtIndex3=greet.charAt(3);
console.log("Character at index 3 is:",charAtIndex3);

console.log("Find the last character:");
var charAtLastIndex=greet.charAt(greetLength-1);
console.log("Last character is:",charAtLastIndex);

console.log("Index of char which is not available in the string z is: ",greet.indexOf('z'));

console.log("Index of o char:",greet.indexOf('O'));
console.log("Index of o char using lastIndexOf:",greet.lastIndexOf('o'));

var replaceResult = greet.replace("Morning","Evening");
console.log(replaceResult);
console.log(greet);

console.log("Upper case:",replaceResult.toUpperCase());
console.log("Lower case:",replaceResult.toLowerCase());


var myName = " Mohit    Sharma  "; 
var myNameAfterTrim = myName.trim(); 
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);

//Find the total extra spaces removed from string-myName
var count=myName.length-myNameAfterTrim.length;
console.log("Total extra spaces removed from string=",count);

console.log(myName.trimStart(),myName.trimEnd());

console.log("includes()"); 
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor")); 
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon")); 
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));


console.log("slice() method"); 
var sliceResult = greet.slice(5, 12); 
console.log(sliceResult); 
console.log(greet.slice(2, 5));

console.log("split() method"); 
var greet = "Good Morning"; 
var splitResult = greet.split(" "); 
console.log(splitResult);
//var typeOfSplitResult= typeOF splitResult;
//console.log(typeOfSplitResult);
console.log("Total words:",splitResult.length);

var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var frndList=myFriendList.split(" ");
console.log(myFriendList);
console.log("Total words:",frndList.length);
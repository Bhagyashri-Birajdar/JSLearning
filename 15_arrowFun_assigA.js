//Function with no argument and no return value
console.log("==========Arrow Function with no args and no return value=========");
let show = () => console.log("Good Morning, Today is Monday");
show();

//Function with 3 args and no  return value
console.log("==========Arrow Function with 3 args and no return value=========");
let multiply =(num1, num2, num3=1) => {
    let multiplyResult= num1 * num2 * num3 ;
    console.log(`multiplication Result: ${multiplyResult}`);
}
multiply(5, 5, 2);
multiply(10,4);

//Function with 5 args and  return value
console.log("==========Arrow Function with 5 args and  return value=========");
let add = (value1, value2, value3, value4, value5) => 
{
    let addResult = value1 + value2 + value3 + value4 + value5;
    return `for received params do the addition: ${addResult}` ;
}
let final = add(100, 100, 200, 349, 756);
console.log(final);

let finalWords = add("I am"," learning"," ES6"," features"," in depth.");
console.log(finalWords);
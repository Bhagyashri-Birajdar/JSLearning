


function fuctorialOfNum(num)
{
    if(num<0 || num ==null || num == undefined || num ==NaN)
    console.log(`Entered number is: ${num},which is not valid`);
    
    else     
    if(num>0)
    {
    let factorial = 1;
    {
        for(let index=num;index>=1;index--)
        factorial = factorial*index;
        return factorial;
}
    }
    else
        if(num==0)
        console.log(`Factorial of 0 is 1`);
}


var result= fuctorialOfNum(5);
console.log(`Factorial of 5 is ${result}`);
var result= fuctorialOfNum(3);
console.log(`Factorial of 3 is ${result}`);
var result= fuctorialOfNum(null);
console.log(`Factorial of null is ${result}`);
var result= fuctorialOfNum(8);
console.log(`Factorial of 8 is ${result}`);
var result= fuctorialOfNum(undefined);
console.log(`Factorial of undefined is ${result}`);
var result= fuctorialOfNum(9);
console.log(`Factorial of 9 is ${result}`);
var result= fuctorialOfNum(0);




const arrayNumbers = [20,31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log(arrayNumbers);

console.log("==========step 1==========");
console.log("=====Total elements available or length=====");
var lengthOfArray = arrayNumbers.length;
console.log(`Total elements available in array are: ${lengthOfArray}`);

console.log("==========step 2==========");
console.log("=====First and last  element in arraynumber=====");
var firstElement= arrayNumbers[0];
console.log(`First element in array : ${firstElement}`);

var lastElement =  arrayNumbers[10];
console.log(`Last element in array : ${lastElement}`);

console.log("==========step 3==========");
console.log("=====Third last element using length property=====");

var thirdLastElement =  arrayNumbers[arrayNumbers.length-3];
console.log(`Last element in array : ${thirdLastElement}`);

console.log("==========step 4==========");
console.log("=====All even numbers=====");
 for(let index=0 ;index<=arrayNumbers.length;index++)
    {
if(arrayNumbers[index] % 2==0)
console.log(arrayNumbers[index]);
    }
    console.log("==========step 5==========");
    console.log("=====All Odd numbers=====");
 for(let index=0 ;index<=arrayNumbers.length-1;index++)
    {
if(arrayNumbers[index] % 2 !=0)
console.log(arrayNumbers[index]);
    }

    console.log("==========step 6==========");
    console.log("=====Sum of all even positioned elements from array numbers=====");
    function sumEven()
    {var sum=0;
        for(let index=0; index <(arrayNumbers.length) ; index++)
        if(index%2 ==0)
        {
                sum = sum + arrayNumbers[index];
            console.log(arrayNumbers[index]);
           
        }
        console.log(`Sum of all even positioned elements from array numbers:${sum}` );
    }
sumEven();
    
console.log("==========step 7==========");
console.log("=====Sum of all odd positioned elements from array numbers=====");
    function sumOdd()
    {var sum=0;
        for(let index=0; index <(arrayNumbers.length) ; index++)
        if(index %2 !=0)
        {
            sum = sum + arrayNumbers[index];
            console.log(arrayNumbers[index]);
        }
        console.log(`Sum of all odd positioned elements from array numbers: ${sum}` );
    }
sumOdd();
   
console.log("==========step 8==========");
console.log("=====Sum of all elements from array numbers=====");
    function sum()
    {var sum=0;
        for(let index=0; index <(arrayNumbers.length) ; index++)
       // if(index%2 ==0)
        {
                sum = sum + arrayNumbers[index];
            console.log(arrayNumbers[index]);
           
        }
        console.log(`Sum of all elements from array numbers: ${sum}` );
    }
sum();
console.log("==========step 9==========");
console.log("=====Numbers multiple of 5 from array numbers=====");
    function multipleOf5()
    {
        console.log(`Numbers multiple of 5 from array numbers are:` );
        for(let index=0; index <(arrayNumbers.length) ; index++)
        if(arrayNumbers[index] % 5 ==0)
        {
                   console.log(arrayNumbers[index]);
           
        }
        
    }
multipleOf5();

console.log("==========step 10==========");
const is115available = arrayNumbers.includes(115);
console.log(`Is 115 available in arrayNumbers: ${is115available}`);

console.log("==========step 11==========");
const is23available = arrayNumbers.includes(23);
console.log(`Is 23 available in arrayNumbers: ${is23available}`);

//const arrayNumbers = [20,31, 40, 25, 23, 11, 29, 9, 60, 2, 11 ];
console.log("==========step 12==========");
arrayNumbers[3] = 55, 66;
console.log(arrayNumbers);

console.log("==========step 13==========");
var splicedArray = arrayNumbers.splice(4,3);
console.log(`Deleting elements from array: ${splicedArray}`);
console.log(arrayNumbers);


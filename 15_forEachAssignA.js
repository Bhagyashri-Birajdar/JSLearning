const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log("==========log array elements and their index using for each loop==========");
arrayNumbers.forEach((currentValue,index) => {console.log(currentValue,index);});

console.log("==========Find positive numbers using for each loop==========");
console.log("positive numbers:");
arrayNumbers.forEach((number) => {if(number>0) console.log(number);});

console.log("==========Find negative numbers using for each loop==========");
console.log("Negative numbers:");
arrayNumbers.forEach((number) => {if(number < 0)  console.log(number);});
    let array = arrayNumbers.push();


    console.log("==========Find even numbers using for each loop==========");
    console.log("Even numbers:");
    arrayNumbers.forEach((number) => {if(number%2==0) console.log(number);});
    
    console.log("==========Sum of all elements==========");
    let sum=0;
arrayNumbers.forEach((number) => {sum=sum+number; });
console.log(sum);

console.log("==========Even indexed elements==========");
arrayNumbers.forEach((number,index) => {if(index%2==0) console.log(number);});




    
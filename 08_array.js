// let atharvFN = "Atharv Birajdar";
// let arjunFN = "Arjun Kshirsagar";


// let arrayOfNumbers = [0,2, 4, 5, 6, 7, 8];
// console.log(arrayOfNumbers);
// //console.table(arrayOfNumbers);
// const totalArrayElements = arrayOfNumbers.length; 
// console.log(`Total elements available in array is: ${totalArrayElements}`);

// const is8available = arrayOfNumbers.includes(8);
// console.log(`Is 8 available: ${is8available}`);

// const is4available = arrayOfNumbers.includes(4);
// console.log(`Is 4 available: ${is4available}`);

// const is9available = arrayOfNumbers.includes(9);
// console.log(`Is 9 available: ${is9available}`);

// const indexOf8 = arrayOfNumbers.indexOf(8);
// console.log(`Index of 8 element is: ${indexOf8}`);
// const indexOf100 = arrayOfNumbers.indexOf(100);
// console.log(`Index of 100 element is: ${indexOf100}`);

// var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5]; 
// const valueAtIndex2 = arrayOfNumbers[2]; 
// console.log(`Value at index 2 is: ${valueAtIndex2}`); 


// arrayOfNumbers[1] = 50; 
// console.log(arrayOfNumbers);

// arrayOfNumbers[3] = 35; 
// console.log(arrayOfNumbers);

// console.log("=====Adding element in last using push()=====");
// arrayOfNumbers.push(40);
// console.log(arrayOfNumbers);
// console.log("=====Adding element in first using unshift()=====");
// arrayOfNumbers.unshift(5);
// console.log(arrayOfNumbers);


// var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5]; 
// console.log("=====Removing element in last using push()=====");
// arrayOfNumbers.pop();
// console.log(arrayOfNumbers);
// console.log("=====Removing element in first using unshift()=====");
// arrayOfNumbers.shift();
// console.log(arrayOfNumbers);


// var arrayOfNumbers = [ 10, 20, 25, 15, 30, 5, 40, 45]; 
// console.log("==== slice(startIndex) === "); 
// const arrayFromIndex3 = arrayOfNumbers.slice(3); 
// console.log(arrayFromIndex3); 

// console.log("==== slice(startIndex, endIndex) === "); 
// const subArray = arrayOfNumbers.slice(2, 5); 
// console.log(subArray);

// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// console.log("=====Splice(start index)=====");
// const splicedArray  = arrayOfNumbers.splice(3);
// console.log(`Removed elements from array is: ${splicedArray}`);
// console.log(arrayOfNumbers);

// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// console.log("=====Splice(start index,delete(count))=====");
// const splicedArrayWithDeleteCount  = arrayOfNumbers.splice(2,2);
// console.log(`Removed elements from array using delete count is: ${splicedArrayWithDeleteCount}`);
// console.log(arrayOfNumbers);

// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// const splicedArray15 = arrayOfNumbers.splice(3,1);
// console.log(`Removed elements from array using delete count is:${splicedArray15}`);
// console.log(arrayOfNumbers);

// var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
// const splicedArray12 = arrayOfNumbers.splice(1,2);
// console.log(`Removed elements from array using delete count is:${splicedArray12}`);
// console.log(arrayOfNumbers);

console.log("=====Splice to insert one element without a existing element=====");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(4, 0, 5, 35, 55);
console.log(arrayOfNumbers);

console.log("=====Splice to replace one element=====");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45];
arrayOfNumbers.splice(2, 2, 50, 60);
console.log(arrayOfNumbers);

console.log("==========Traversing==========");
var arrayOfNumbers = [10, 20, 25, 15, 40, 45, 60, 40, 30, 22, 26];
let sum=0;
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const num = arrayOfNumbers[index];
    //console.log(num);
    sum = sum + num;  
}
console.log(`Sum of an array element is: ${sum}`);


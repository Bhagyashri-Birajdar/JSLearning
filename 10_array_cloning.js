const arrayOfNumber = [4, 5, 6, 7, 8, 3];
const newArray =  arrayOfNumber; //shallow clone 
newArray.push(100);
console.log(arrayOfNumber);
console.log(newArray);

const array = [5, 6, 3, 2, 1];
const clonedArray =[...array];
//clonedArray.pop();
//console.log(clonedArray);

console.log("=====Merging an array=====");
const evenArray = [2, 4, 6, 8];
const mergedArray = array + evenArray; //converts into string and then adds array
console.log(mergedArray);
console.log(typeof mergedArray); //

//concat() method
const concatArray = array.concat(evenArray);
console.log(concatArray);
console.log(typeof concatArray);

//spread operator
const resultArray = [...array, ...evenArray];
console.log(resultArray);
console.log(typeof resultArray);

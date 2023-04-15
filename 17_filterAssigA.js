const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const transformedArray1 = arrayNumbers.filter((element) => { return element>50;})
console.log(transformedArray1);

const transformedArray2 = arrayNumbers.filter((element) => { return element %2==0;})
console.log(transformedArray2);

const transformedArry3 = arrayNumbers.filter((element) => { return element%2!=0;})
console.log(transformedArry3);

const transformedArray4 = arrayNumbers.filter((element) => { return element%5==0;})
console.log(transformedArray4);

const transformedArray5 = arrayNumbers.filter((element) => { return 20<element && element<50;})
console.log(transformedArray5);
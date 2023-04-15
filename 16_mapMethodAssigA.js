const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2,19 ];

const transformedArrayNumbers = arrayNumbers.map((element) => { return element + 10;})
console.log(transformedArrayNumbers);

const squaredArrayNumbers = arrayNumbers.map((element) => { return element*element;})
console.log(squaredArrayNumbers);

const addIndexArrayNumbers = arrayNumbers.map((element,index) => { return element+index;})
console.log(addIndexArrayNumbers);
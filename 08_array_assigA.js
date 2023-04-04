const arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Watermelon"]
console.log(arraySeasonalFruits);
console.log(`First element of array:${arraySeasonalFruits[0]}`);
var lastElement= arraySeasonalFruits.length-1;
console.log(`Last element of array:${arraySeasonalFruits [lastElement] }`);


arraySeasonalFruits.unshift("Papaya");
console.log(`Array after adding papaya before Banana: ${arraySeasonalFruits}`);

arraySeasonalFruits.splice(4,1);
console.log(`Array after removing mango:${arraySeasonalFruits}`);

arraySeasonalFruits.push("Pineapple");
console.log(`Array after inserting Pineapple at last position: ${arraySeasonalFruits}`);

var addDragonfruit= arraySeasonalFruits.splice(3,0,"dragon fruit");
console.log(`Array after inserting dragon fruit before watermelon : ${arraySeasonalFruits}`);

arraySeasonalFruits[2]="Kiwi";
console.log(`Array after replacing orange with kiwi : ${arraySeasonalFruits}`);

const slicedArray = arraySeasonalFruits.slice(1, 4);
console.log(`Array from 1 to 4 index:${slicedArray}`);

var a = (arraySeasonalFruits.length-3);
console.log(a);
var b = arraySeasonalFruits.length;
console.log(b);
const lastThreeFruits=arraySeasonalFruits.slice(arraySeasonalFruits.length-3);
console.log(lastThreeFruits);
// //const slicedArray = arraySeasonalFruits.slice(1, 4);
console.log(`Array from last 3 elements:${lastThreeFruits}`);










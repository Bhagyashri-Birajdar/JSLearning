const car = {
    carName : "Creta SX",
    company : "Hundai",
    launchYear : 2017
}
const carEngine = {
    enginePower:"1499CC",
    maxPower:"113 BHP"
}

console.log("==========Merging objects using object assign=========");

const mergedObject = Object.assign({},car, carEngine);
console.log(mergedObject);

console.log("==========Merging objects using spread operator=========");

const mergedObject_using_spread = {...car , ...carEngine};
console.log(mergedObject_using_spread );


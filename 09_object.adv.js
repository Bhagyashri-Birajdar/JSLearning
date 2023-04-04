const employee = {
    ID : 1234567,
    Name: "Elon musk",
    country: "US",
    city: "Silicon valley"
}
console.log("==== in operator ====="); 
const isIdAvailable = "id" in employee; 
console.log(isIdAvailable);

const array = []
console.log("=====Object traversing=====");
for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key,element);
        //array.push(key);
    }
}
const keysOfEmployee = Object.keys(employee);
console.log(keysOfEmployee);


const valuesOfEmployee = Object.values(employee);
console.log(valuesOfEmployee);


const entriesOfEmployee = Object.entries(employee);
console.log(entriesOfEmployee);

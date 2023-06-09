const employee = {
    ID : 1234567,
    Name: "Elon musk",
    country: "US",
    city: "Silicon valley"
}
console.log("==== in operator ====="); 
const isIdAvailable = "ID" in employee; 
console.log(isIdAvailable);

const array = [];
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


const player = { 
    fullName: "Virat Kohli", 
    totalCenturies : 46, 
    isMarries: true
 } 
Object.freeze(player); 
player.totalVicket = 120; //Adding new property - Not allowed as object is freezed 
delete player.totalCenturies;// deleting property - Not allowed as object is freezed 
player.fullName = "King Kohli"; // Updating existing property - Not allowed as object is freezed 
console.table(player);

const student = {  
    firstName: "Elon", 
    lastName: "Musk", 
    age: 54 
}  
const address = { 
    country : "US", 
    city : "Silicon Valley", 
    PIN: "QA2345" 
}
    // First way 
    const mergedObject = Object.assign(student, address); 
    console.table(mergedObject);
    // Second way 
    const newObject = {}; 
    Object.assign(newObject, student, address); 
    console.table(newObject); 
    
    // Third way 
    Object.assign(student, address); 
    console.table(student); 
    
    // Fourth way 
    Object.assign(address, student); 
    console.table(address);
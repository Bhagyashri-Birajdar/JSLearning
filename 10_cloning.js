let n1=100; //200
let n2 = n1; //Deep clone
console.log(n2); //100
n1 = 200;
console.log(n2);//

let s1 = "Hey JS";
let s2 = s1; // Deep clone

let b1 = true;
let b2 = b1; // Deep clone

const person = {
    fullName : "M S Dhoni",
    age : 38
}
//Object.freeze(person);
//person.city = "Ranchi";

const player = person; //shallow clone
player.fullName = "Captain cool Dhoni";
console.log(player);
console.log(person);

console.log("Deep clone using spread operator");  
const newPlayer = {...person};
console.log(newPlayer);
newPlayer.age = 42;
console.log(`newPlayer==>${newPlayer.fullName} ${newPlayer.age}`);
console.log(`person==>${person.fullName} ${person.age}`);

const student ={
    fullName : "Virat Kohli",
    age : 33,
    address : {
    details:{
        street: "AS club",
        city : "Pune",
        PIN : 431202
    }
}
}
console.log("=======================================");
console.log(student.address.details.city);
const newStudent = {...student};//Deep clone using spread operator for nested object
newStudent.fullName = "King Kohli";
newStudent.address.city = "Mumbai";
console.log(`newStudent==>${newStudent.address.city}`);
console.log(`student==>${student.address.city}`);

console.log(`newStudent==>${newStudent.fullName}`);
console.log(`student==>${student.fullName}`);

console.log("Deep clone using spread string json");
const bank = {
    bankName : "SBI Bank",
    accountNo : 3456789,
    bankAddresss :{
        city :"Banglore",
        PIN : 5556677
            }
}

const newBank = JSON.parse(JSON.stringify(bank));
newBank.bankAddresss.PIN = 999999;
console.log(`bank==>${bank.bankAddresss.PIN} `);
console.log(`newBank==>${newBank.bankAddresss.PIN}`);


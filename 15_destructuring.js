//object literals
let student= {
    firstName: "Bhagyashri",
    lastName:"Birajdar",
    isWorking: true,
    age: 32,
    collegeName: "WIT,Solapur",
    id: 123456
}

// let firstName = student.firstName;
//let isWorking = student.isWorking;
//let age =student.age ;
//let collegeName = student.collegeName;
let{firstName, isWorking, age, collegeName, id, city="Pune"} = student; //Object destructing
console.log(`Extracted values from Object is: isWorking: ${isWorking} ,age :${age} ,collegeName: ${collegeName} ,city:${city}`);



//Array destructuring

const array =[5, 6, 7, 8, 9];
let [num1, num2, num3, num4, num5, num6] = array;
console.log(num1, num2, num3, num4, num5, num6);
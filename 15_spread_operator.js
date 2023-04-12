//spread operator
const array =[1, 2, 3, 4, 5, 8, 9];
console.log(array);
console.log(...array);

const student = {
fullName : "Bhagyashri Birajdar",
age : 33,
city : "Pune"
}
console.log(student);

function show(arg1, ...arg){
    console.log(arg1,arg);
}
show(3,4,6,8,9);
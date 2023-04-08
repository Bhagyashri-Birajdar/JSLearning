const arrayNums = [20,3,4,56,90,400,49 ];

console.log("==========Perform shallow clone and update array with numbers==========");
const numberArray = arrayNums;
numberArray.push(55,66) ;
console.log(`cloned array: [${numberArray}]`);
console.log(`original array: [${arrayNums}]`);

console.log("==========Perform deep clone and update array with numbers==========");
const arrayOfNumbers = [...arrayNums];
console.log(arrayOfNumbers);
arrayNums.push(10,25);
console.log(`cloned array:[ ${arrayOfNumbers}]`);
console.log(`original array:[ ${arrayNums}]`);

console.log("==========Merging array using spread operator==========");
const arrayEven = [2, 30, 14, 8];
console.log(`arrayEven:[${arrayEven}]`);
const merged_array =[...arrayEven , ...arrayNums];
console.log(`After merging arrayEven and original array:[ ${merged_array}]`);



// const employee_info ={
//     emp_id: 27,
//     emp_name: "John Doe",
//     salary:{
//         july_month: "40,000INR",
//         aug_month: "50,000INR",
//         jun_month: "65,000INR"
//     },
//     address:{
//         locality: {
//             colony: "OM vrindavan Society",
//             street: "Kanch Pokli, 431202" ,
//         },
//         city: "Mumbai",
//         state: "Maharashtra",
//         country: "India"
//     },
//     mobiles: ["+91 8600 3456 88","1800- 4567 32", "+91-9096 5678 77"]
// }
// let employeeDetails = JSON.parse(JSON.stringify(employee_info));
// console.log(employee_info,employeeDetails);

// employeeDetails.salary.july_month = "80,000INR";
// console.log(`Updated salary of july month: ${employeeDetails.salary}`);
// employeeDetails.address.country = "United Kingdom";
// console.log(`Updated address : ${employeeDetails.address.country}`);

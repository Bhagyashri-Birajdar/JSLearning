//myName = "Virat"; 
// Not allowed let myName = "Virat"; 
// console.log(myName); 
// person = { // Not allowed to define an object without var, let and const 
//     firstName: "Virat", 
//     lastName: "Kohli", 
//     age : 33 }

'use strict' 
//myName = "Virat"; 
// Not allowed let myName = "Virat"; 
//console.log(myName); 
// delete myName; // Not allowed 
// person = {
     // Not allowed to define an object without var, let and const 
     // firstName: "Virat", 
     // lastName: "Kohli", 
     // age : 33 
     // } 
     const student = { 
        rollNo: 34, 
        age: 17, 
        city: "PUNE" 
    } 
          // delete student; 
     // Not allowed in strict mode

     function show(arg1 , arg2=1)
     {
        console.log(arg1, arg2);
        console.log(arg1/arg2);
         }
         show(100);
         show(100,101);
let professor= {
    id : 123456,
    firstname: "Bhagyashri",
    lastname: "Birajdar",
    department: "Computer",
    age : 33,
    ismarried : "Yes",
    contact : 9870564723,
    address:{
              street: "warje",
              city: "Pune",
              pin: 428538,
         },
    degrees: {
               BE:"CSE" ,
               ME:"Computer application" ,
               PHD:"Advanced Computing ",
        },
    certificates :["Hacker rank participation" , "Certificate in IFE cource" , "Certificate in advanced programming" , "Certificate in advanced JAVA" ],
     degreesConcat: function(){
         return `Total degrees are:${this.degrees.BE} ${this.degrees.ME} ${this.degrees.PHD}`;
             },
    }

console.table(professor);

console.log("=====Function which concat all degrees =====");
let degrees=professor.degreesConcat();
console.log(`Teacher degrees are:${degrees}`);

console.log("=====Adding new property =====");
professor.total_experience = "14 years";
console.table(professor);

console.log("=====Modifying existing property =====");
professor.age = 35;
console.table(professor);

console.log("=====Adding element at end of array =====");
professor.certificates.push ("Oracle certified");
console.table(professor);

console.log("=====Displaying last element of array =====");
console.log(professor.certificates[professor.certificates.length-1]);

//object literals
  let student= {
    firstName: "Bhagyashri",
    lastName:"Birajdar",
    isWorking: true,
    age: 32,
    collegeName: "WIT,Solapur",
    id: 123456,
    address: {
             street:"Wakad",
             city:"Solapur",
             pin:413222

    },
    school : "Ganesh vidyalaya",
    friends : ["Suraj", "Arjun", "Ridhima"],
    show: function(){
      console.log("I am show() function");
      },
    addressDetails: function(){
      
      return `Address is :Street ${this.address.street},city${this.address.city},pin${this.address.pin}`
    }
  };
  let resultAddress = student.addressDetails();
  console.log(resultAddress);

  student.show(); 
  console.log(student.friends[2]);//console.log(student.friends[student.friends.length-1]);
student.address.pin = 413508;

student.marks = {
  math : 80,
  physics: 60,
  drawing:70
},
student.school = "XYZ";
console.log(student.marks);
console.log(student.address.city);
  console.table(student);
  console.log(typeof student);
  //. dot notation
  console.log(student.firstName);
  //[] notation
  console.log(student["lastName"]);

 // Update property
 student.collegeName = "COEP PUNE";

  console.log(student.age);

  //add new property
  student.city = "Mumbai";

  student.country = "India";

  //delete the property
  delete student.isWorking;
  console.table(student);

//empty object
  let teacher ={ };
  teacher.firstName= "Mohit";
  teacher.lastName= "Rohite";

  const array = {};
  array[0]=12;
  console.log(array);

  console.log(teacher);
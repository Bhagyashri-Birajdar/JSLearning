class Employee {

    constructor(empId,empName,empDept,empSalary,empCompany) {

        this.empId = empId;

        this.empName = empName;

        this.empDept = empDept;

        this.empSalary = empSalary;

        this.empCompany = empCompany;

    }

}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~ Created All Employee Objects Using Class ~~~~~~~~~~~~~~~~~~~~~~~~~~~");

const empAnil = new Employee (22,"Anil","IT",50000,"TCS");

console.log(empAnil);

const empRadha = new Employee (33,"Radha","HR",74000,"Wipro");

console.log(empRadha);

const empRishi = new Employee (55,"Rishi","Finance",47000,"TCS");

console.log(empRishi);

const empSonali = new Employee (66,"Sonali","Finance",45000,"Infy");

console.log(empSonali);

const empMonika = new Employee (77,"Monika","IT",40000,"wipro");

console.log(empMonika);

const empViny = new Employee (88,"Vinyak","IT",75000,"TCS");

console.log(empViny);

const empMahi = new Employee (99,"Mahesh","HR",85000,"Infy");

console.log(empMahi);

const arrayEmployee = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi]; 

let lengthOfarrayEmployee = arrayEmployee.length ;
console.log(`Numbers of employees: ${lengthOfarrayEmployee}`);
console.log("Find the employees whose name start with R...."); 
arrayEmployee.forEach(employee => { let empName = employee.empName; if (empName.startsWith("R")) { console.log(employee); } });

console.log("Infy employees total salary"); 
let totalSalaryOfInfy = 0; 
arrayEmployee.forEach(employee => { if(employee.empCompany=="Infy") 
{ totalSalaryOfInfy = totalSalaryOfInfy + employee.empSalary; } }); 
console.log(totalSalaryOfInfy);

console.log("Employees working in TCS only");
arrayEmployee.forEach(employee => {if(employee.empCompany == "TCS") {console.log(employee.empName ,employee.empCompany);}});

console.log("Employees havin salary greater than 75000");
arrayEmployee.forEach(employee => {if(employee.empSalary >= 75000 && employee.empDept=="IT" ||  employee.empDept=="HR" ) {console.log(employee.empName ,employee.empCompany, employee.empSalary);}});


console.log("Employees having salary greater than or equal to 50000");
arrayEmployee.forEach(employee => {if(employee.empSalary >= 50000 && employee.empDept=="IT") {console.log(employee);}});


console.log("Sum the salary of all employees"); 
let sum = 0; 
arrayEmployee.forEach( (employee) => sum = sum + employee.empSalary ); 
console.log(sum);


console.log("Average of the salary of all employees"); 
arrayEmployee.forEach( (employee) => {let average = sum/ lengthOfarrayEmployee;
console.log(average);} ); 




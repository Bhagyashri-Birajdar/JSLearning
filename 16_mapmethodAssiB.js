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


console.log("Map method use");
console.log("=====List of Employee names=====");
const newArray = []; 
const namesOfarrayEmployee = arrayEmployee.map((Employee) => {
    newArray.push(Employee.empName); })
    console.log(newArray);

console.log("=====List of Employee Departments=====");
const deptOfarrayEmployee = arrayEmployee.map((Employee) => {console.log(Employee.empDept);})

console.log("=====List of Employee id's=====");
const idOfarrayEmployee = arrayEmployee.map((Employee) => {console.log(Employee.empId);})

console.log("=====List of Employee names working in TCS=====");
const TCSOfarrayEmployee = arrayEmployee.map((Employee) => {if(Employee.empCompany=="TCS") console.log(Employee.empName);})


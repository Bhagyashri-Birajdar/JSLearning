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

const mapEmployees = new Map();


mapEmployees.set(22,empAnil);
mapEmployees.set(33,empRadha);
mapEmployees.set(55,empRishi);
mapEmployees.set(66,empSonali);
mapEmployees.set(77,empMonika);
mapEmployees.set(88,empViny);
mapEmployees.set(99,empMahi);

console.table(mapEmployees)
console.log("=====Traversing using for each loop:=====");

arrayEmployee.forEach((Employee) => {console.log(`${Employee.empId}===> Name:${Employee.empName} Dept: ${Employee.empDept} Salary:${Employee.empSalary} Company:${Employee.empCompany}`);});
mapEmployees.forEach((key,value) => {console.log(`${key}===> Name:${value.empName} Dept: ${value.empDept} Salary:${value.empSalary} Company:${value.empCompany}`);})
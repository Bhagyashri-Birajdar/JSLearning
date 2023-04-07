let bank_sbi = {
    bankName : "SBI bank" ,
    accountNo: 567834290,
    ifsc : "SBIN0005678",
    interestRate: 12.75,
}

let bank_location = {
    Street : "Wakad Road" ,
    city : "Pune" ,
    pin_code: 412555,    
}
console.log("=====clone object using Object_assign()w=====");
let cloned_object = Object.assign({},bank_sbi , bank_location)
//console.log(`cloned object using Object_assign(): ${cloned_object}`);
console.log(cloned_object);

console.log("=====clone object using spread operator=====");
const clonedObject = {...bank_sbi , bank_location};
//console.log(`cloned object using spread operator: ${clonedObject}`);
console.log(clonedObject);

let rate_of_interest_with_properties = {
home_loan_interest :5.6 ,
personale_loan_interest : 7.2 , 
due_interest :8.9 ,
}
console.log("=====Merging all SBI details=====");
const sbi_details = Object.assign(bank_sbi, bank_location, rate_of_interest_with_properties ); 
   // console.table(`Merging all SBI details:${sbi_details}`);
   console.log(sbi_details);

 
    console.log("=====Traversing all SBI details=====");
    for (const key in sbi_details) {
        if (Object.hasOwnProperty.call(sbi_details, key)) {
            const element = sbi_details[key];
            console.log(key,element);
             }
    }
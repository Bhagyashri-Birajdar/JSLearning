let sbiBank = {
bankName : "SBI Bank",
location : "ADB sakoli road",
accountno : 4567891230,
ifsc : "SBIN0001817",
interestRate : "4%",
showDetails: function(){
    console.log(`Bank details are:--> bankName :${this.bankName}  ,location :${this.location} ,accountno :${this.accountno} ,ifsc :${this.ifsc} ,interestRate :${this.interestRate}`);
}
}
sbiBank.showDetails();
let axisBank = {
    bankName : "Axis bank",
    location :"Agra road Aligarh" ,
    accountno :223343546576 ,
    ifsc : "UTIB0001532",
    interestRate :"5%" ,  
    showDetails: function(){
        console.log(`Bank details are:--> bankName :${this.bankName}  ,location :${axisBank.location} ,accountno :${axisBank.accountno} ,ifsc :${axisBank.ifsc} ,interestRate :${axisBank.interestRate}`);
    }
}
axisBank.showDetails();
let hdfcBank = {
    bankName : "HDFC BANK",
    location : "AIROLI",
    accountno : 400240190,
    ifsc : "HDFC0004024",
    interestRate : "3%",  
    showDetails: function(){
        console.log(`Bank details are:--> bankName :${this.bankName}  ,location :${this.location} ,accountno :${this.accountno} ,ifsc :${this.ifsc} ,interestRate :${this.interestRate}`);
}
}
hdfcBank.showDetails();
let yesBank = {
    bankName : "YES BANK",
    location : "ULHASNAGAR",
    accountno :400532015 ,
    ifsc : "YESB0000122",
    interestRate :"2%" ,  
    showDetails: function(){
        console.log(`Bank details are:--> bankName :${this.bankName}  ,location :${this.location} ,accountno :${this.accountno} ,ifsc :${this.ifsc} ,interestRate :${this.interestRate}`);
    }
}
yesBank.showDetails();
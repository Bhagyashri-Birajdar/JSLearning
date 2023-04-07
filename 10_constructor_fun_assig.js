// function Bank(){
//     this.bankName =bank_bankname,//'Kotak Mahindra bank',
//     this.location = bank_location,//'Kothrud,Pune',
//     this.ifscCode = bank_ifscCode,//'KTKM0007685',
//     this.branchCode = bank_branchCode//'007685'



    class Bank {
        bankName
        location
        account
        ifsc
        interestRate
        constructor(bankName, location, account, ifsc, interestRate){
            this.bankName = bankName;
            this.location = location;
            this.account = account;
            this.ifsc = ifsc;
            this.interestRate = interestRate;
        }
        }
        console.log("============================Bank details===========================================");
        const sbiBank = new Bank ("SBi Bank", "Wakad road,Pune","SBIN0003425",5463768492,12.75) ;
        console.log(sbiBank);
        const yesbank = new Bank('yes bank','warje bridge,Pune','YESN0002354',647827383838,14);
       console.log(yesbank);        
        const mahbank = new Bank('Maharashtra bank','Karve Nagar,Pune','MAHB0002224',45478273838,14);
       console.log(mahbank);     
        const axisbank = new Bank('AXIS bank','Baner road,Pune','Axi0002354',975827383838,14);
       console.log(axisbank);  
        
       console.log("============Add data member on prototyoe object===========");
        Bank.prototype.openTime = '6AM IST';
        Bank.prototype.closeTime = '9PM IST';
        // axisBank.prototype.openTime = '6AM IST';
        // axisBank.prototype.closeTime = '9PM IST';
        // yesBank.prototype.openTime = '6AM IST';
        // yesBank.prototype.closeTime = '9PM IST';
        // mahbank.prototype.openTime = '6AM IST';
        // mahbank.prototype.closeTime = '9PM IST';
console.log("=======================================================================");
        console.log('SBI bank open time is :',sbiBank.openTime,'and SBI bank close time is:', sbiBank.closeTime);
        console.log('Axis bank open time is :',axisbank.openTime,"and Axis bank close time is :",axisbank.closeTime);

        console.log("=======================================================================");
        console.log('YesBank Details: Bank name is', yesbank.bankName,'and open time is :',yesbank.openTime);

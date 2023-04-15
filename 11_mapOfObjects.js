console.log("=============================================================================");


class Bank { 
    constructor(bankName, location, account, ifsc, interestRate )
    {
         this.bankName = bankName; 
         this.location = location; 
         this.account = account; 
         this.ifsc = ifsc; 
         this.interestRate = interestRate;
         }
         } 
         const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 ); 
         const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50); 
         const yesBank = new Bank("Yes Bank", "Mumbai", "62514897564", "YES0004598", 14.75 ); 
         const hdfcBank = new Bank("HDFC Bank", "Surat", "62514897564", "HDFC0004598", 9.75 ); 
         const punjabBank = new Bank("punjab Bank", "New peth,Solapur", "62514897564", "PNJB00045356", 9.75 ); 
         const kotakBank = new Bank("kotak Bank", "Shivaji chouk,Latur", "24514897564", "KOTK0009298", 10.75 ); 
         const iciciBank = new Bank("icici Bank", "Roy chouk,Kalkatta", "7924897564", "ICIC00041428", 7.95 ); 
         const mapOfBank = new Map(); 
         mapOfBank.set("SBI_11", sbiBank);
         mapOfBank.set("AXIS_22", axisBank); 
         mapOfBank.set("YES_33", yesBank); 
         mapOfBank.set("HDFC_44", hdfcBank); 
         mapOfBank.set("punjab_55", punjabBank); 
         mapOfBank.set("kotak_66", kotakBank); 
         mapOfBank.set("icici_77", iciciBank); 

         const element = mapOfBank.get("YES_33") 
         const keyOfMap = mapOfBank.keys(); 

         for (const key of keyOfMap)
          { 
            const element = mapOfBank.get(key) 
            console.log(key, element); 
        }
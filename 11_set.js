const setOfNums = new Set();
setOfNums.add(2); 
setOfNums.add(3); 
setOfNums.add(8); 
setOfNums.add(2); 
setOfNums.add(9); 
setOfNums.add(3); 
console.log(setOfNums);



//const setOfNums = new Set(); setOfNums.add(2); setOfNums.add(3); setOfNums.add(8); setOfNums.add(2); setOfNums.add(9); setOfNums.add(3); console.log(setOfNums); console.log(setOfNums.size); setOfNums.delete(8); console.log(setOfNums); // setOfNums.clear(); console.log(setOfNums.values())



//const array = [3, 4, 5, 6, 7, 2, 4, 5]; const setOfElements = new Set(); for (const element of array) { setOfElements.add(element); } // console.table(setOfElements); const arrayOfUniqueElements = [...new Set(array)]; console.log(arrayOfUniqueElements);


//for (const element of setOfNums) { console.log(element); }


//const mapOfNumbers = new Map(); mapOfNumbers.set("One", 1); mapOfNumbers.set("Two", 2); mapOfNumbers.set("Three", 3); mapOfNumbers.set("One", 11); mapOfNumbers.set("Five", 5); mapOfNumbers.set("Six", 6); // mapOfNumbers.set("Four", 2); // mapOfNumbers.set("Two", 22); console.log(mapOfNumbers.size); console.table(mapOfNumbers); console.log(mapOfNumbers.get('Two')); console.log(mapOfNumbers.get('One')); // mapOfNumbers.delete("Two") // console.log("After Delete", mapOfNumbers.size); console.log(mapOfNumbers.has("Two")); const valuesOfMap = mapOfNumbers.values(); console.log(valuesOfMap); console.log("Traversing Map"); const keysOfMap = mapOfNumbers.keys(); // console.log(keysOfMap); for (const key of keysOfMap) { console.log(key, mapOfNumbers.get(key)); }


//class Bank { constructor(bankName, location, account, ifsc, interestRate ){ this.bankName = bankName; this.location = location; this.account = account; this.ifsc = ifsc; this.interestRate = interestRate; } } const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 ); const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50); const yesBank = new Bank("Yes Bank", "Mumbai", "62514897564", "YES0004598", 14.75 ); const hdfcBank = new Bank("HDFC Bank", "Surat", "62514897564", "HDFC0004598", 9.75 ); const setOfBanks = new Set(); setOfBanks.add(sbiBank); setOfBanks.add(axisBank); setOfBanks.add(yesBank); setOfBanks.add(hdfcBank); for (const bank of setOfBanks) { console.log(bank.bankName); }

//class Bank { constructor(bankName, location, account, ifsc, interestRate ){ this.bankName = bankName; this.location = location; this.account = account; this.ifsc = ifsc; this.interestRate = interestRate; } } const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 ); const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50); const yesBank = new Bank("Yes Bank", "Mumbai", "62514897564", "YES0004598", 14.75 ); const hdfcBank = new Bank("HDFC Bank", "Surat", "62514897564", "HDFC0004598", 9.75 ); const mapOfBank = new Map(); mapOfBank.set("SBI_11", sbiBank); mapOfBank.set("AXIS_22", axisBank); mapOfBank.set("YES_33", yesBank); mapOfBank.set("HDFC_44", hdfcBank); const element = mapOfBank.get("YES_33") const keyOfMap = mapOfBank.keys(); for (const key of keyOfMap) { const element = mapOfBank.get(key) console.log(key, element); }
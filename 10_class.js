class Bank {
  // bankName
  // location
  // account
  // ifsc
  // interestRate
  constructor(bankName, location, account, ifsc, interestRate) {
    this.bankName = bankName;
    this.location = location;
    this.account = account;
    this.ifsc = ifsc;
    this.interestRate = interestRate;
  }
  showDetails() {
    console.log(
      `Bank details is:${this.bankName},${this.location},${this.account},${this.ifsc},${this.interestRate}`
    );
  }
}
const sbiBank = new Bank(
  "SBi Bank",
  "Wakad road,Pune",
  "5463768492",
  "SBIN0003425",
  12.75
);
sbiBank.showDetails();

const yesbank = new Bank(
  "yes bank",
  "warje bridge,Pune",
  "YESN0002354",
  647827383838,
  14
);
yesbank.showDetails();
const mahbank = new Bank(
  "Maharashtra bank",
  "Karve Nagar,Pune",
  "MAHB0002224",
  45478273838,
  14
);
mahbank.showDetails();
const axisbank = new Bank(
  "AXIS bank",
  "Baner road,Pune",
  "Axi0002354",
  975827383838,
  14
);
axisbank.showDetails();

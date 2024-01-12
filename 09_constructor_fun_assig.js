function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}

console.log(
  `---------------------------------------Step 2---------------------------------------`
);
const yesBank = new Bank("YES Bank", "Bund Garden", "YES10101", 6319);
console.log(
  `Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC Code: ${yesBank.ifscCode}, Branch Code: ${yesBank.branchCode}`
);
console.log(" ");

const sbiBank = new Bank("SBI Bank", "Dhankawadi", "SBI10101", 5916);
console.log(
  `Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC Code: ${sbiBank.ifscCode}, Branch Code: ${sbiBank.branchCode}`
);
console.log(" ");

const mahBank = new Bank("Maharashtra Bank", "Pune", "MAHA10101", 5060);
console.log(
  `Bank Name: ${mahBank.bankName}, Location: ${mahBank.location}, IFSC Code: ${mahBank.ifscCode}, Branch Code: ${mahBank.branchCode}`
);
console.log(" ");

const axisBank = new Bank("AXIS Bank", "Bund Garden", "AXIS10101", 6319);
console.log(
  `Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, IFSC Code: ${axisBank.ifscCode}, Branch Code: ${axisBank.branchCode}`
);

console.log(" ");
console.log(
  `---------------------------------------Step 5---------------------------------------`
);
console.log(" ");

Bank.prototype.openTime = "9 Am IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(
  `Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC Code: ${sbiBank.ifscCode}, Branch Code: ${sbiBank.branchCode}, Open Time: ${sbiBank.openTime}, Close Time: ${sbiBank.closeTime}`
);

console.log(" ");
console.log(
  `---------------------------------------Step 6---------------------------------------`
);
console.log(" ");

console.log(
  `Bank Name: ${axisBank.bankName}, Location: ${axisBank.location}, IFSC Code: ${axisBank.ifscCode}, Branch Code: ${axisBank.branchCode}, Open Time: ${axisBank.openTime}, Close Time: ${axisBank.closeTime}`
);

console.log(" ");
console.log(
  `---------------------------------------Step 7---------------------------------------`
);
console.log(" ");

console.log(
  `Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC Code: ${yesBank.ifscCode}, Branch Code: ${yesBank.branchCode}, Open Time: ${yesBank.openTime}, Close Time: ${yesBank.closeTime}`
);

console.log(
  `--------------------------------Step 1--------------------------------`
);
const bankSbi = {
  bankName: "SBI Bank",
  Branch: "Pune",
  balance: 200000,
  accountType: "Current",
};
console.log(`Create Bank SBI Object :`);
console.log(bankSbi);
console.log("");

console.log(
  `--------------------------------Step 2--------------------------------`
);
const bankLocation = {
  street: "Wakad",
  city: "Pune",
  pin: 411043,
};
console.log(`Create Bank Location Object : `);
console.log(bankLocation);
console.log("");

console.log(
  `--------------------------------Step 3--------------------------------`
);
console.log("");
const cloneBankSbi = Object.assign({}, bankSbi);
console.log(`Create Cloned Object of Bank SBI:`);
console.log(cloneBankSbi);

console.log("");

const cloneBankLocation = Object.assign({}, bankSbi);
console.log(`Create Cloned Object of Bank Location: `);
console.log(cloneBankLocation);

console.log("");
console.log(
  `--------------------------------Step 4--------------------------------`
);
const rateOfInterest = {
  homeLoneInterest: "8%",
  personalLoneInterest: "13%",
  duleInterest: "15%",
};
console.log(`Create Rate Of interest Object:`);
console.log(rateOfInterest);

console.log("");
console.log(
  `--------------------------------Step 5--------------------------------`
);
console.log(`Merge Step One , Two And Four: `);
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);
console.log(sbiDetails);
console.log(bankSbi);
console.log(bankLocation);
console.log(rateOfInterest);

console.log("");
console.log(
  `--------------------------------Step 6--------------------------------`
);
console.log(`Traverse Merge Object: `);
for (const key in sbiDetails) {
  if (Object.hasOwnProperty.call(sbiDetails, key)) {
    const element = sbiDetails[key];
    console.log(element);
  }
}

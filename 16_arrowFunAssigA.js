console.log(
  `--------------------------------Step 1--------------------------------`
);
const logMessage = () => {
  console.log(`Good Morning, Today is Thursday.`);
};
logMessage();

console.log("");
console.log(
  `--------------------------------Step 2--------------------------------`
);
console.log("");

const multiplication = (num1, num2, num3 = 1) => {
  console.log(
    `Given Number 1: ${num1} , Number 2: ${num2} anNumber 3: ${num3} `
  );

  console.log(`Multiplication Of Three Number Is: ${num1 * num2 * num3} `);
  console.log("");
};
multiplication(5, 5, 2);
multiplication(10, 4);

console.log(
  `--------------------------------Step 3--------------------------------`
);
console.log("");

const addition = (n1, n2, n3, n4, n5) => {
  console.log(
    `Value 1: ${n1}, value 2: ${n2}, Value 3: ${n3}, value 4: ${n4} and value 5: ${n5}`
  );
  return n1 + n2 + n3 + n4 + n5;
};
let numAddition = addition(100, 100, 200, 349, 756);
console.log(`Addition Of Given Value: ${numAddition}`);
console.log("");
let strAddition = addition("I am", "learning", "ES6", "features", "in depth.");
console.log(`Addition Of Given Value: ${strAddition}`);

console.log(
  "-------------------------------------Question 1-----------------------------------"
);
function greterNumber(num1, num2) {
  console.log(`Given Number is ${num1} and ${num2}`);
  var greaterNum = num1 > num2 ? num1 : num2;

  console.log(`The Greater Number is: ${greaterNum}`);
}
greterNumber(10, 10);
console.log("");

greterNumber(800, 899);

console.log(
  "-------------------------------------Question 2-----------------------------------"
);

function isEvenOrOddNum(number) {
  var resultEvenOrOdd = number % 2 == 0 ? "Even Number" : "Odd Number";
  console.log(`${number} is ${resultEvenOrOdd}.`);
}

isEvenOrOddNum(29);

isEvenOrOddNum(44);

isEvenOrOddNum(0);

isEvenOrOddNum(101);

console.log(
  "-------------------------------------Question 3-----------------------------------"
);

function checkLengthType(str) {
  var lengthType = str.length % 2 === 0 ? "Even" : "Odd";
  return lengthType;
}

console.log(`javaScript Length is ${checkLengthType("JavaScrip")}`);
console.log(`Developer Length is ${checkLengthType("Developer")}`);
console.log(`Google Length is ${checkLengthType("Google")}`);

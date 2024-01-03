console.log("---------------------------Step 1-----------------------------");
console.log("");

var checkEvenOrOdd = function (Num) {
  if (Num % 2 == 0) {
    return `The Given Number ${Num} is Even`;
  } else {
    return `The Given Number ${Num} is Odd`;
  }
};

var result = checkEvenOrOdd(45);
console.log(result);
console.log("");

var result = checkEvenOrOdd(70);
console.log(result);
console.log("");

var result = checkEvenOrOdd(67);
console.log(result);
console.log("");

var result = checkEvenOrOdd(98);
console.log(result);

console.log("---------------------------Step 2-----------------------------");
console.log("");

var eligibleForVote = function (age) {
  if (age >= 18) {
    return `Age ${age} is Eligible For Vote.`;
  } else {
    return `Age ${age} is Not Eligible For Vote.`;
  }
};
var eligibleOrNote = eligibleForVote(18);
console.log(eligibleOrNote);
console.log("");

var eligibleOrNote = eligibleForVote(20);
console.log(eligibleOrNote);
console.log("");

var eligibleOrNote = eligibleForVote(17);
console.log(eligibleOrNote);
console.log("");

var eligibleOrNote = eligibleForVote(40);
console.log(eligibleOrNote);
console.log("");

console.log("---------------------------Step 3-----------------------------");
console.log("");

var checkStringLength = function (str) {
  if (str.length > 10) {
    return `Given String ${str} Length is More Than 10.`;
  } else {
    return `Given String ${str} Length is Less Than 10.`;
  }
};
var checkLengthOfStr = checkStringLength("javaScript-ES6");
console.log(checkLengthOfStr);
console.log("");

var checkLengthOfStr = checkStringLength("Myself");
console.log(checkLengthOfStr);

console.log("---------------------------Step 3-----------------------------");
console.log("");

var strStartWith = function (str1) {
  if (str1.startWith == "Java") {
    return `This Given String ${str1} is Start with "Java"`;
  } else {
    return `This Given String ${str1} is Start with Another Charecter Or Word.`;
  }
};
var startWithJava = strStartWith("JavaScript");
console.log(startWithJava);
console.log("");

var startWithJava = strStartWith("Python");
console.log(startWithJava);

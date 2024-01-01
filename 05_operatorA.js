console.log(
  "-------------------------Question 1---------------------------------"
);
console.log("");
function squareOfWordLength(str1) {
  // var givenString = "This is String";

  var lengthOfString = str1.length;

  var squareOfStringLen = str1.length * str1.length;

  console.log(`Length Of Given String " ${str1} " is: ${squareOfStringLen}`);
}
squareOfWordLength("JavaScript");
console.log("");

squareOfWordLength("Google Chrome");
console.log("");

squareOfWordLength("Developer Smart");

console.log("");
console.log(
  "-------------------------Question 2----------------------------------"
);
console.log("");

function divideStringlength() {
  givenString = "I am Angular Developer";

  var strlength = givenString.length;

  console.log(`Length Of Given String: ${strlength}`);
  console.log("");

  var calTotalWords = givenString.split(" ");
  console.log(
    `Total Number Of Words Available In String: ${calTotalWords.length}`
  );
  console.log("");

  var divideTotalWords = givenString.length / calTotalWords.length;
  console.log(
    `Division Of Length Of Given String And Total Number Of Words Is: ${divideTotalWords}`
  );
  console.log("");

  var multiplyTotalWord = givenString.length * calTotalWords.length;

  console.log(
    `Multiplication Of Length Of Given String And Total Number Of Words Is: ${multiplyTotalWord}`
  );
}
divideStringlength();

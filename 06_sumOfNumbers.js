// //Sum of Number 1 to 10
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum = sum + i;
// }
// console.log(`Sum Of Number 1 to 10 is: ${sum}`);

// // Multiplication of Number 1 to 5
// let multi = 1;

// for (let i = 1; i <= 5; i++) {
//   multi = multi * i;
// }
// console.log(`Multiplication of number 1 to 5 is: ${multi}`);

// //Revers String
// let word = "Developer";
// let result = "";
// for (let index = word.length - 1; index >= 0; index--) {
//   result = result + word.charAt(index);
// }
// console.log(`Revers String : ${result}`);

// //string contain how many vowels
// let s1 = "Developer UI";
// let vowelsCount = 0;
// for (let index = 0; index < s1.length; index++) {
//   let char = s1.charAt(index).toLowerCase();
//   if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
//     vowelsCount = vowelsCount + 1;
//   }
// }
// console.log(`Vowels count is: ${vowelsCount}`);

function sumOfNum() {
  let sum = 0;
  for (let index = 1; index <= 5; index++) {
    sum = sum + index;
  }
  console.log(sum);
}
sumOfNum();

// function countVowels(str) {
//   let vowelCount = 0;
//   for (let index = 0; index <= str.length; index++) {
//     let char = str.charAt(index).toLowerCase();
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       vowelCount = vowelCount + 1;
//     }
//   }
//   console.log(vowelCount);
// }
// countVowels("Developer");

function reverseString(str) {
  var newString = "";
  for (let index = str.length - 1; index >= 0; index--) {
    newString = newString + str.charAt(index);
  }
  console.log(newString);
}
reverseString("Developer");

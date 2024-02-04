//function -> 2 number sum
// let sum = 0;
// function sumOfTwo(num1, num2) {
//   sum = num1 + num2;
//   return sum;
// }
// let result = sumOfTwo(10, 20);
// console.log(result);

//create a function using the "function" keyword that takes a string as an
//  argument return the number of vowels in the string

// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char.toLowerCase() == "a" ||
//       char.toLowerCase() == "e" ||
//       char.toLowerCase() == "i" ||
//       char.toLowerCase() == "o" ||
//       char.toLowerCase() == "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("SURAJ");

// write a program using arrow function
const numberOfVowels = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char.toLowerCase() == "a" ||
      char.toLowerCase() == "e" ||
      char.toLowerCase() == "i" ||
      char.toLowerCase() == "o" ||
      char.toLowerCase() == "u"
    ) {
      count++;
    }
  }
  console.log(`Total Number Of Vowels: ${count}`);
};
numberOfVowels("WAP to return total number of vowels in the string");

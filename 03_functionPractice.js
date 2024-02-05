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
// const numberOfVowels = (str) => {
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
//   console.log(`Total Number Of Vowels: ${count}`);
// };
// numberOfVowels("WAP to return total number of vowels in the string");

//forEach
//forEach loop in Array is a higher Order Function or higher Order method
//in forEach method you can pass three parameter
//1. current Value
//2. Index
//3. Array

// let array = [1, 2, 5, 7, 6];
// array.forEach(function printVal(val, index, array) {
//   console.log(`index: ${index} and Value ${val} and Array: ${array}`);
// });

// higher oerder function which is used a passed function as a parameter or return a function as avalue

//practice Question
//for a given array of numbers, print the square of each value using the forEach loop.
// let normalArray = [1, 2, 3, 7, 8, 9, 4, 6, 5];
// normalArray.forEach((currentVal) => {
//   let suqareOfVal = currentVal * currentVal;
//   console.log(`${suqareOfVal}`);
// });

//Map method:
// map method is similar to the forEach method. btu the major different is the map mehtod
// is create a nem function whenever we perform any operation.
// In mapMethod you can pass Three Paramenters
//1. Current Value Is required
//2. index
//3. array

//filter method
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenNum = array.filter((val) => {
//   return val % 2 == 0;
// });
// console.log(evenNum);

(function (a) {

  return (function () {
    console.log(a);
    // a = 23;
  })();

})(45);

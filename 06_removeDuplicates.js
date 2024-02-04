// // program to remove duplicate value from an array

// function getUnique(arr) {
//   let uniqueArr = [];

//   // loop through array
//   for (let i of arr) {
//     // last index element index that is -1
//     if (uniqueArr.indexOf(i) === -1) {
//       uniqueArr.push(i);
//     }
//   }
//   console.log(uniqueArr);
// }

// const array = [1, 2, 3, 2, 3];

// // calling the function
// // passing array argument
// getUnique(array);

// const array = [1, 2, 3, 2, 3];

// let uniqueArr = [];
// for (const element of array) {
//     if (!uniqueArr.includes(element)) {
//         uniqueArr.push(element);
//     }
// }
// console.log(uniqueArr);

// function removeDuplicate(arr) {
//   console.log(`Given Array: ${arr}`);
//   let uniqueArr = [];
//   for (const element of arr) {
//     if (uniqueArr.indexOf(element) == -1) {
//       uniqueArr.push(element);
//     }
//   }
//   console.log(`After Remove Duplicate: ${uniqueArr}`);
// }
// let array = [11, 3, 4, 11, 4, 7, 3];
// removeDuplicate(array);

let array = [11, 3, 4, 11, 4, 7, 3];
let emptyArray = [];
for (const element of array) {
  if (emptyArray.indexOf(element) == -1) {
    emptyArray.push(element);
  }
}
console.log(emptyArray);

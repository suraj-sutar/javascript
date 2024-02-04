// let marks = [97, 87, 75, 64, 36];
// console.log(`${marks}`);

// console.log(`${marks.length}`);
// console.log(`${marks[0]}`);

// //add elemen to last
// marks.push(100);
// console.log(marks);

// //remove last element
// marks.pop();
// console.log(marks);

// //remove first element
// marks.shift();
// console.log(marks);

// //add element first
// marks.unshift(200);
// console.log(marks);

// marks.splice(2, 1, 66);
// console.log(`${marks}`);

// // for (const element of marks) {
// //   console.log(`${element}`);
// // }

// for (let index = 0; index < marks.length; index++) {
//   console.log(marks[index]);
// }

//for a given array with marks of student -> [85,97,44,37,76,60]
//find the average marks of the entire class

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (const element of marks) {
//   sum = sum + element;
//   var average = sum / marks.length;
// }
// console.log(average);

// for a given array with prices of 5 items -> [250,645,300,900,50]
//all items have an offer of 10% off on them change the array to store final price after applying offer
// const givenArray = [250, 645, 300, 900, 50];
// const newArray = [];

// for (const element of givenArray) {
//   let tenPerc = element / 10;
//   let offerApplay = element - tenPerc;
//   newArray.push(offerApplay);
// }

// console.log(newArray);

//create an array to store companies -> Bloomberg, Microsft,Uber,Google,IBM,Netflix
//a Remove the first Company From the Array
//b. Remove Uber And Add Ola In ite Place
//c. Add Amazon at the end

const companyArray = [
  "Bloomberg",
  "Microsft",
  "Uber",
  "Google",
  "IBM",
  "Netflix",
];

companyArray.shift();
console.log(companyArray);

companyArray.splice(1, 1, "Ola");
console.log(companyArray);

companyArray.push("Amazon");
console.log(companyArray);

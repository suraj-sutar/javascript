//sum Of n number
// let n = 5;
// let sum = 0;
// for (let index = 1; index <= n; index++) {
//   sum = sum + index;
// }
// console.log(sum);

//print all even numbers from 0 to 100.
// for (let index = 0; index <= 100; index++) {
//   if (index % 2 === 0) {
//     console.log(index);
//   }
// }

//Create a game where you start with any random game number ask the user to keep gussing the
//  game number until the user enters correct value

//first create gameNum
let gameNum = 25;
//then guess the user enter number
let userEnterNum = prompt("Guess the game number: ");
//then write condition
while (userEnterNum != gameNum) {
  userEnterNum = prompt("You enteres wrong number.Enter Again:");
}

console.log("Congratulation ,you entered the right number");

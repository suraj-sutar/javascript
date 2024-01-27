const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];

console.log(`-------------------------Step 1-------------------------`);
console.log("");
console.log(`Original Array: ${arrayRollNumbers}`);

let reverseArray = arrayRollNumbers.reverse();
console.log(`Reverse Array: ${reverseArray}`);

console.log("");
console.log(`-------------------------Step 2-------------------------`);
console.log("");

let sortArrayUsingSortMethod = arrayRollNumbers.sort();
console.log(`Sort Array Using "sort()" : ${sortArrayUsingSortMethod}`);

console.log("");
console.log(`-------------------------Step 3-------------------------`);
console.log("");

const new_array = arrayRollNumbers.sort((a, b) => {
  return a - b;
});

console.log(`Sort Array In Ascending Order: ${new_array}`);

console.log("");
console.log(`-------------------------Step 4-------------------------`);
console.log("");

const firstSortAscending = arrayRollNumbers.sort((a, b) => {
  return a - b;
});
const greaterNumber = firstSortAscending.splice(firstSortAscending.length - 1);
console.log(`Greatest Number From Array: ${greaterNumber}`);

console.log("");
console.log(`-------------------------Step 5-------------------------`);
console.log("");
const firestSortArray = arrayRollNumbers.sort((a, b) => {
  return a - b;
});

const smallestNumber = firestSortArray[0];
console.log(`Smallest Number From Array: ${smallestNumber}`);

console.log("");
console.log(`-------------------------Step 6-------------------------`);
console.log("");

const emptyArray = [];
for (const element of arrayRollNumbers) {
  if (emptyArray.indexOf(element) == -1) {
    emptyArray.push(element);
  }
}
console.log(`After Removing Duplicate From Array: ${emptyArray}`);

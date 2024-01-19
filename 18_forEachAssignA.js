const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log("");
console.log(
  `------------------------------------Step 1------------------------------------`
);
console.log("");

arrayNumbers.forEach((element, index) => {
  console.log(`Index: ${index} , Element: ${element}`);
});

console.log("");
console.log(
  `------------------------------------Step 2------------------------------------`
);
console.log("");
console.log(`Positive Numbers From Given Array: `);
arrayNumbers.forEach((element) => {
  if (element > 0) {
    console.log(element);
  }
});

const result = console.log(``);

console.log("");
console.log(
  `------------------------------------Step 3------------------------------------`
);

const emptyArray = [];

arrayNumbers.forEach((element) => {
  if (element < 0) {
    emptyArray.push(element);
  }
});
console.log(`Nigative Numbers: ${emptyArray}`);

console.log("");
console.log(
  `------------------------------------Step 4------------------------------------`
);
console.log(`Even Numbers: `);
arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
    console.log(element);
  }
});

console.log("");
console.log(
  `------------------------------------Step 5------------------------------------`
);

let sum = 0;
arrayNumbers.forEach((element) => {
  sum = sum + element;
});
console.log(`Sum Of All Elements : ${sum}`);

console.log("");
console.log(
  `------------------------------------Step 6------------------------------------`
);
console.log(`Even Index Elements: `);
arrayNumbers.forEach((element, index) => {
  if (index % 2 == 0) {
    console.log(element);
  }
});

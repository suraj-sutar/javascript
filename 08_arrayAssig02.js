const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log(
  `-------------------------------Step 1-------------------------------`
);

console.log(`Total Elements Of Given Array: ${arrayNumbers}`);
console.log(`Length Of Given Array is: ${arrayNumbers.length}`);

console.log(
  `-------------------------------Step 2-------------------------------`
);
console.log(
  `First Element Of Array is: ${
    arrayNumbers[0]
  } And Last Element Of Array is: ${arrayNumbers[arrayNumbers.length - 1]}`
);

console.log(
  `-------------------------------Step 3-------------------------------`
);
console.log(
  `Third Last Element Of An Given Array is: ${
    arrayNumbers[arrayNumbers.length - 3]
  }`
);

console.log(
  `-------------------------------Step 4-------------------------------`
);
console.log(`Find Even Number Using For of loop: `);

for (const elements of arrayNumbers) {
  if (elements % 2 == 0) {
    console.log(`${elements}`);
  }
}

console.log(
  `-------------------------------Step 5-------------------------------`
);
console.log(`Find Odd Number Using For of loop: `);
for (const elements of arrayNumbers) {
  if (elements % 2 != 0) {
    console.log(`${elements}`);
  }
}

console.log(
  `-------------------------------Step 6-------------------------------`
);
console.log(`Even Positioned Elements : `);
let sum = 0;
for (const index in arrayNumbers) {
  if (index % 2 == 0) {
    console.log(`${arrayNumbers[index]}`);
    sum = sum + arrayNumbers[index];
  }
}
console.log(`Total Sum Of Even Index Elements is: ${sum}`);

console.log(
  `-------------------------------Step 7-------------------------------`
);
console.log(`Odd positioned Elements:`);
let sumOfOdd = 0;
for (const index in arrayNumbers) {
  if (index % 2 != 0) {
    console.log(`${arrayNumbers[index]}`);
    sumOfOdd = sumOfOdd + arrayNumbers[index];
  }
}
console.log(`Total Sum Of Odd Index Elements is: ${sumOfOdd}`);

console.log(
  `-------------------------------Step 8-------------------------------`
);
let sumOfAll = 0;
for (const elements of arrayNumbers) {
  sumOfAll = sumOfAll + elements;
}
console.log(`Sum Of All Elements From Array is: ${sumOfAll}`);

console.log(
  `-------------------------------Step 9-------------------------------`
);
console.log(`Number Which Are Multiple Of 5: `);
for (const elements of arrayNumbers) {
  if (elements % 5 == 0) {
    console.log(`${elements}`);
  }
}

console.log(
  `-------------------------------Step 10-------------------------------`
);

console.log(
  `Given Number 115 Is Available Or Not: ${arrayNumbers.includes(115)}`
);

console.log(
  `-------------------------------Step 11-------------------------------`
);

console.log(
  `Given Number 23 Is Available Or Not: ${arrayNumbers.includes(23)}`
);

console.log(
  `-------------------------------Step 12-------------------------------`
);

console.log(
  `Insert 55 And 66 At Index Position 3 : ${arrayNumbers.splice(3, 0, 55, 66)}`
);
console.log(`${arrayNumbers}`);

console.log(
  `-------------------------------Step 13-------------------------------`
);

console.log(
  `Delete 3 Elements Starting From Index 4 : ${arrayNumbers.splice(4, 3)}`
);
console.log(`${arrayNumbers}`);

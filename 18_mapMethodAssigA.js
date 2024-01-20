const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(
  `----------------------------------Step 1------------------------------------`
);
console.log("");
console.log(`Given Array : ${arrayNumbers}`);
const addTen = arrayNumbers.map((element) => {
  return element + 10;
});

console.log(`After Add 10 Each Element: ${addTen} `);

console.log("");
console.log(
  `----------------------------------Step 2------------------------------------`
);
console.log("");
console.log(`Given Array : ${arrayNumbers}`);
const cubeOfElement = arrayNumbers.map((element) => {
  return element * element * element;
});
console.log(`Cube Of Each Element: ${cubeOfElement}`);

console.log("");
console.log(
  `----------------------------------Step 3------------------------------------`
);
console.log("");
console.log(`Given Array : ${arrayNumbers}`);
const addIndexEachElement = arrayNumbers.map((element, index) => {
  return element + index;
});
console.log(
  `After Add Index Vlaue Into Each Array Element: ${addIndexEachElement}`
);

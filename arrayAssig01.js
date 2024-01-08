const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`-------------------------Step 1-------------------------`);
console.log(
  `First Element is: ${fruits_seasonal[0]} And Last Element is : ${
    fruits_seasonal[fruits_seasonal.length - 1]
  }`
);

console.log(`-------------------------Step 2-------------------------`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`-------------------------Step 3-------------------------`);
fruits_seasonal.splice(4, 1);
console.log(fruits_seasonal);

console.log(`-------------------------Step 4-------------------------`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`-------------------------Step 5-------------------------`);
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(fruits_seasonal);

console.log(`-------------------------Step 6-------------------------`);
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(fruits_seasonal);

console.log(`-------------------------Step 7-------------------------`);
var middleElements = fruits_seasonal.slice(1, 4);
console.log(middleElements);

console.log(`-------------------------Step 8-------------------------`);
var lastThreeElement = fruits_seasonal.slice(-3);
console.log(lastThreeElement);

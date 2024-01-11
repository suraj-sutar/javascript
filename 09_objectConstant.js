const developer = {
  firstName: "Gajanan",
  age: 32,
  isMarried: true,
};
console.log(developer);
developer.age = 34;
console.log(developer);

// Not allowed
// developer = {

// }
console.log(`====== Object Freezing === `);
Object.freeze(developer);
developer.isMarried = false;
developer.firstName = "Jenny";
console.log(developer);

console.log(`------------const array------------`);
const array = [2, 3, 5, 7, 8];
console.log(`${array}`);
array[0] = 100;

console.log(`----------------freesing An Array`);
Object.freeze(array);
array[1] = 77;
console.log(array);

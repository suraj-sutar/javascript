// // A function takes function as an parameter and return function
// function greet(callback) {
//   console.log(`Inside greet function...`);
//   callback();
//   //then retun another function
//   return function () {
//     console.log(`Returning one more function....`);
//   };
// }
// const talk = function () {
//   console.log(`Good Morning`);
// };
// //retrun function as an argument
// const returnFunction = greet(talk);
// returnFunction();
// //greet(talk)();

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    zipCode: "12345",
  },
  contacts: {
    email: "john.doe@example.com",
    phone: "555-1234",
  },
};
const developer = { ...person };
person.address.zipCode = 1111;
console.log(developer.address.zipCode);
console.log(person.address.zipCode);

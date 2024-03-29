let person = {
  firstName: "Suraj Sutar",
  age: 23,
  isMarried: false,
};
console.log(person);

console.log(`Dot Notation`);
console.log(person.firstName); //
console.log(`Square bracket Notation`);
console.log(person["firstName"]); //

person.designation = "Tech Arch";
console.log(person);

person.age = 33; // Update
console.log(person);

person.isMarried = false;
//console.table(person);

delete person.designation;
console.table(person);

console.log(`Empty Object....`);
let address = {};
address.city = "Pune";
console.log(address);

// let user = {
//   name: "suraj ",
//   country: "USA",
//   address: {
//     city: "Pune",
//     street: "Wakad",
//     pin: "411037",
//     getAddress: function () {
//       console.log(
//         `Complete Address : ${this.street}, ${this.city} , ${this.pin}`
//       );
//     },
//   },
//   show: function () {
//     console.log(`Inside Show Function`);
//   },
// };
// // console.log(user.show());
// user.show();

// // read value
// console.log(user.address.pin);

// //add Value
// user.address.pin = 411043;
// console.log(user.address);

// user.address.getAddress();

let user = {
  userName: "Jenny",
  country: "USA",
  address: {
    city: "Pune",
    street: "Wakad",
    pin: 411057,
    getAddress: function () {
      console.log(
        `Complete Address: ${this.flatNo}, ${this.street}, ${this.city}, ${this.pin}`
      );
    },
  },
  show: function () {
    console.log(`Inside show function`);
  },
};
console.log(user);
let country = user.country;
console.log(country);
user.show();

console.log(user.address.pin);
user.address.flatNo = 308;
console.log(user.address);

user.address.getAddress();

console.log(`====== Traversing an object ========`);
let developer = {
  firstName: "Gajanan",
  age: 32,
  isMarried: true,
  skills: ["C", "CPP", "Core Java", "JavaScript", "Microservices"],
};
for (const key in developer) {
  if (Object.hasOwnProperty.call(developer, key)) {
    const element = developer[key];
    console.log(`Key ==> ${key}, Value ==> ${element}`);
  }
}

console.log(developer.skills);
developer.skills.push("HTML");
console.log(developer.skills);
developer.skills.shift();
console.log(developer.skills);

//Nested Array:

// const keys = Object.keys(developer);
// console.log(keys);

// const values = Object.values(developer);
// console.log(values);
// console.log(`Is 'values' array ==>  ${Array.isArray(values)}`);
// for (const element of values) {
//   console.log(element);
// }

// console.log(`Object entries....`);
// const entries = Object.entries(developer);
// for (const element of entries) {
//   console.log(element);
// }
// console.log(`Accessing nested array element using double [] [] brackets`);
// console.log(entries[0][0]);
// console.log(entries[0][1]);

//
console.log(`if you want all keys then simply write the one statement`);
const keys = Object.keys(developer);
console.log(keys);

console.log(
  `if you want all value of that keys then simply write the one statement`
);
//it return all vakues in a form  of array:
const values = Object.values(developer);
console.log(values);

console.log(`Travrse Object`);
for (const element of values) {
  console.log(element);
}

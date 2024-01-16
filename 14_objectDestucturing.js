let person = {
  firstName: "Gajanan",
  age: 32,
  isMarried: true,
  city: "Pune",
  country: "Bharat",
};
// let firstName = person.firstName;
// let age = person.age;
// let isMarried = person.isMarried;
// let city = person.city;

let { firstName, age, country, city = "Mumbai", pin = "12345" } = person; //object Destucturing
console.log(firstName, age, city, country, pin);

console.log(
  `---------------------------Array Desturcture------------------------------`
);
let array = ["jenny", "Elon", "Bill"];
const element0 = array[0];
const element1 = array[1];
const element2 = array[2];

let [acterss, teslaOwner, microsoftOwner, appleCeo = "Tim Cook"] = array;
console.log(acterss, teslaOwner, microsoftOwner, appleCeo);

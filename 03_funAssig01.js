console.log(
  "---------------------------------Question 1---------------------------------------"
);
console.log("");

console.log("First Function With No Arguments And No Return Type");
console.log("");
function firstFunc() {
  console.log(
    "This log For First Function With No Argumant And No Return Type."
  );
}
firstFunc();

console.log(
  "-----------------------------------------------------------------------"
);
console.log("");

console.log("Second Function With No Arguments And No Return Type");
console.log("");
function noArgu() {
  console.log(
    "This log For Second Function With No Argumant And No Return Type."
  );
}
noArgu();

console.log("");
console.log(
  "---------------------------------Question 2-------------------------------------"
);
console.log("");

function personalDetails(firstName, lastName, collegeName) {
  console.log(
    "Personal Details: ",
    "First Name: ",
    firstName,
    " ,Last Name: ",
    lastName,
    ", College Name: ",
    collegeName
  );
}

personalDetails(
  "Suraj",
  "Sutar",
  "KJ College Of Engineering Management And Research"
);

console.log("");
console.log(
  "--------------------------------Question 3---------------------------------------"
);
console.log("");

function swapvalues(num1, num2) {
  console.log(
    "Before Swap Value:",
    "Number 1 Value -->",
    num1,
    ", Number 2 Value -->",
    num2
  );
  console.log("");

  var temp = num1;
  num1 = num2;
  num2 = temp;

  console.log(
    "After Swap Value:",
    "Number 1 Value -->",
    num1,
    ", Number 2 Value -->",
    num2
  );
}
swapvalues("Virat", "Anushka");
console.log("------------------------------------------------------------");
swapvalues(1000, 2000);

console.log("");
console.log(
  "--------------------------------Question 4---------------------------------------"
);
console.log("");

function addThreeValues(num1, num2, num3) {
  console.log("Given Numbers Are: ", num1, ",", num2, ",", num3);
  var result = num1 + num2 + num3;

  console.log("Result: ", result);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");

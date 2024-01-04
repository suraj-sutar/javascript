console.log(
  "---------------------------------Step 1------------------------------------"
);
console.log("");

function checkMarriageeligibility(gender, age) {
  if (age < 0 || age == undefined || isNaN(age)) {
    console.log(`Age Value ${age} is Invalied Value...`);
    console.log("");
  } else if (gender == "Male" && age >= 21) {
    console.log(`He is Eligible For Marriage Because he is ${age} years old`);
    console.log("");
  } else if (gender == "Male" && age < 21) {
    console.log(
      `He is Not Eligible For Marriage Because he is ${age} years old`
    );
    console.log("");
  } else if (gender == "Female" && age >= 18) {
    console.log(`She is Eligible For Marriage Because she is ${age} years old`);
    console.log("");
  } else if (gender == "Female" && age < 18) {
    console.log(
      `She is Not Eligible For Marriage Because She is ${age} years old`
    );
    console.log("");
  } else if (gender == "Other" && age >= 21) {
    console.log(
      `He or she age is ${age} but it is not confirmed whether they are married or not.`
    );
    console.log("");
  } else {
    console.log("You Enter Both Invalied Value...");
  }
}
checkMarriageeligibility("Male", 17);

checkMarriageeligibility("Male", 25);

checkMarriageeligibility("Male", -21);

checkMarriageeligibility("Male", undefined);

checkMarriageeligibility("Male", NaN);

checkMarriageeligibility("Female", 28);

checkMarriageeligibility("Female", 16);

checkMarriageeligibility("Female", NaN);

checkMarriageeligibility("Other", 35);

checkMarriageeligibility("Other", 41);

checkMarriageeligibility("transegender", 1000);

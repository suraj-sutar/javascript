console.log("---------------------------Step 1-----------------------------");
console.log("");

function maleMarriageEligibility(gender, age, boyName) {
  var marriageResult =
    gender == "Male" && age >= 21
      ? `hey ${boyName} You Are Eligible For Marriage.`
      : `Hey ${boyName} Due To Some Condition You Are Not Eligile For Marriage.`;

  return marriageResult;
}

var result = maleMarriageEligibility("Male", 25, "Billgates");
console.log(result);

console.log("");

var result = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(result);

console.log("---------------------------Step 2-----------------------------");
console.log("");

function femaleMarriageEligibility(gender, age, girlName) {
  var femaleMarriageResult =
    gender == "Female" && age >= 18
      ? `Hey ${girlName} You Are Eligible For Marriage.`
      : `Hey ${girlName} Due To Some Condition You Are Not Eligile For Marriage.`;
  return femaleMarriageResult;
}
var marriageResult = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(marriageResult);
console.log("");

var marriageResult = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(marriageResult);

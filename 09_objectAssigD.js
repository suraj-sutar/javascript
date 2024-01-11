let professor = {
  name: "P.S.Ghavane",
  age: 49,
  subject: "Cloud Computing",
  address: "Pune",
  designation: "HOD",
  degrees: {
    Engineering: "CSC",
    PHD: "Adv Computing",
    MCA: "Computer App Development",
    MBA: "MArketing",
  },
  certicates: [
    "Hacker Rank Participation",
    "Certificates in IFE course",
    "Certificate in Adv Programming",
  ],
};
console.log(`----------------------------Step 1----------------------------`);
console.log(`Details About Professor:`);
console.log(professor);

console.log(`----------------------------Step 2----------------------------`);
console.log(`Degrees: `);
console.log(professor.degrees);

console.log(`----------------------------Step 3----------------------------`);
console.log(`Certificates: `);
console.log(professor.certicates);

console.log(`----------------------------Step 4----------------------------`);
console.log(`Add New Property Total Experience : `);
professor.totalExperience = "14 Year";
console.log(professor.totalExperience);
console.log(professor);

console.log(`----------------------------Step 5----------------------------`);
console.log(`Update Designation Property : `);
professor.designation = "Head Of Department";
console.log(professor);

console.log(`----------------------------Step 6----------------------------`);
console.log(`Add One New Certificate "Oracle Certified" At The Index 2 : `);
professor.certicates.splice(2, 0, "Oracle Certified");
console.log(professor.certicates);

console.log(`----------------------------Step 7----------------------------`);
console.log(`Print Last Elemnet Of The Array : `);
console.log(professor.certicates[professor.certicates.length - 1]);

console.log(`----------------------------Step 8----------------------------`);
console.log(`Complete Object:`);
console.log(professor);

console.log(`----------------------------Step 9----------------------------`);
console.log(`Traverse Certificate Array :`);
// for (const element of professor.certicates) {
//   console.log(element);
// }

for (const Index in professor.certicates) {
  if (Object.hasOwnProperty.call(professor.certicates, Index)) {
    const element = professor.certicates[Index];
    console.log(element);
  }
}

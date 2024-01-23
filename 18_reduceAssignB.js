class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
//object create using new Keyword
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Viny", "IT", 75000, "TCS");
const emp_mahi = new Employee(88, "Mahesh", "HR", 85000, "Infy");

const empArray = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`--------------------------Step 1--------------------------`);
console.log("");
console.log(`Employee From Wipro Company:`);
console.log("");
const findEmpInWipro = empArray.filter((element) => {
  return element.emp_company == "Wipro";
});
findEmpInWipro.forEach((element) => {
  console.log(`Name: ${element.emp_name}`);
});

console.log("");
console.log(`--------------------------Step 2--------------------------`);
console.log("");
console.log(`Employee From It And HR Department:`);
console.log("");
const empFromItAndHr = empArray.filter((element) => {
  return element.emp_dept == "IT" || element.emp_dept == "HR";
});
empFromItAndHr.forEach((element) => {
  console.log(`Name : ${element.emp_name}`);
});

console.log("");
console.log(`--------------------------Step 3--------------------------`);
console.log("");
console.log(`Employee Whose ID are Greater Than 50:`);
console.log("");

const idGreater = empArray.filter((element) => {
  return element.emp_id > 50;
});
idGreater.forEach((element) => {
  console.log(`Name: ${element.emp_name}`);
});

console.log("");
console.log(`--------------------------Step 4--------------------------`);
console.log("");
console.log(`Employee Whose Name Start with 'A' And 'V' : `);
console.log("");

const empStartWith = empArray.filter((element) => {
  return element.emp_name.startsWith("A") || element.emp_name.startsWith("V");
});
empStartWith.forEach((element) => {
  console.log(`Name: ${element.emp_name}`);
});

console.log("");
console.log(`--------------------------Step 5--------------------------`);
console.log("");
const totalSalary = empArray.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);
// console.log(`result: ${totalSalary}`);

const average = totalSalary / empArray.length;
console.log(`Average Salary Of The employee: ${average}`);

console.log("");
console.log(`--------------------------Step 6--------------------------`);
console.log("");

const empFormItDept = empArray.filter((element) => {
  return element.emp_dept == "IT";
});

const totalSalary1 = empFormItDept.reduce((runningTotal, element) => {
  return runningTotal + element.emp_salary;
}, 0);

console.log(
  `Average Salary For IT Department: ${totalSalary1 / empFormItDept.length}`
);

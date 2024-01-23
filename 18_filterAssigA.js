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

console.log("");
console.log(`----------------------------Step 1----------------------------`);
console.log("");
const tcsEmployee = empArray.filter((element) => {
  return element.emp_company == "TCS";
});
tcsEmployee.forEach((element) => {
  console.log(
    `Company Name: ${element.emp_company} , Employee Name: ${element.emp_name} `
  );
});

console.log("");
console.log(`----------------------------Step 2----------------------------`);
console.log("");

//first filter wipro company emplyee
const filterComp = empArray.filter((element) => {
  return element.emp_company == "Wipro";
});

//then calculate average
let totalSum = 0;
filterComp.forEach((element) => {
  totalSum = totalSum + element.emp_salary;
});

const totalLen = filterComp.length;

const average = totalSum / totalLen;
console.log(`Average Salary Of Employee From Company Wipro: ${average}`);

console.log("");
console.log(`----------------------------Step 3----------------------------`);
console.log("");

const filterCompany = empArray.filter((element) => {
  return element.emp_company == "Wipro" || element.emp_company == "Infy";
});

let totalSumOfSal = 0;
filterCompany.forEach((element) => {
  totalSumOfSal = totalSumOfSal + element.emp_salary;
});
const totalLength = filterCompany.length;

const averageOfSal = totalSumOfSal / totalLength;

console.log(
  `Average Salary Of Employee From Company Wipro And Infy: ${averageOfSal}`
);

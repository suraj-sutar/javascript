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

console.log(
  `------------------------------------Step 1------------------------------------`
);

empArray.forEach((element) => {
  if (element.emp_company == "TCS") {
    console.log(`Name: ${element.emp_name} , Company: ${element.emp_company}`);
  }
});

console.log("");
console.log(
  `------------------------------------Step 2------------------------------------`
);
console.log("");

empArray.forEach((element) => {
  if (element.emp_salary >= 50000) {
    console.log(
      `Id: ${element.emp_id}, Name: ${element.emp_name}, Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`
    );
  }
});

console.log("");
console.log(
  `------------------------------------Step 3------------------------------------`
);
console.log("");
let totalAllSalary = 0;
empArray.forEach((element) => {
  totalAllSalary = totalAllSalary + element.emp_salary;
});

console.log(`Sum Of All Employee Salary is: ${totalAllSalary}`);

console.log("");
console.log(
  `------------------------------------Step 4------------------------------------`
);
console.log("");

//first calculate total salary
let calTotalSalary = 0;
empArray.forEach((element) => {
  calTotalSalary = calTotalSalary + element.emp_salary;
});
const totalEmp = empArray.length;
const average = calTotalSalary / totalEmp;
console.log(`Average Salary Of All Employee is: ${average}`);

console.log("");
console.log(
  `------------------------------------Step 5------------------------------------`
);
console.log("");

empArray.forEach((element) => {
  if (element.emp_salary >= 75000) {
    if (element.emp_dept == "IT" || element.emp_dept == "HR") {
      console.log(
        `Id: ${element.emp_id}, Name: ${element.emp_name}, Department: ${element.emp_dept}, Salary: ${element.emp_salary}, Company: ${element.emp_company}`
      );
    }
  }
});

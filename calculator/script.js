//select all input text
const firstVal = document.querySelector(".first_vlaue");
console.log(firstVal);
const secondVal = document.querySelector(".second_value");
console.log(secondVal);

//select all button id
const addtionBtn = document.querySelector("#addi");
const suntractionBtn = document.querySelector("#sub");
const multiplicationBtn = document.querySelector("#mul");
const divisionBtn = document.querySelector("#divi");

//select result display class
const resultVal = document.querySelector(".result_value");

addtionBtn.addEventListener("click", () => {
  const valfirst = +firstVal.value;
  const valsecond = +secondVal.value;

  const valResult = valfirst + valsecond;
  console.log(valResult);

  resultVal.innerHTML = valResult;
});

suntractionBtn.addEventListener("click", () => {
  const valfirst = +firstVal.value;
  const valsecond = +secondVal.value;

  const valResult = valfirst - valsecond;
  console.log(valResult);

  resultVal.innerHTML = valResult;
});

multiplicationBtn.addEventListener("click", () => {
  const valfirst = +firstVal.value;
  const valsecond = +secondVal.value;

  const valResult = valfirst * valsecond;
  console.log(valResult);

  resultVal.innerHTML = valResult;
});

divisionBtn.addEventListener("click", () => {
  const valfirst = +firstVal.value;
  const valsecond = +secondVal.value;

  const valResult = valfirst / valsecond;
  console.log(valResult);

  resultVal.innerHTML = valResult;
});

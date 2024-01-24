//getElementById
const projectName = document.getElementById("projectName");
console.log(projectName);
console.log(projectName.innerHTML);

//getElementByTagName
const liElement = document.getElementsByTagName("li");
console.log(liElement[0].innerHTML);
console.log(liElement[1].innerHTML);
console.log(liElement[2].innerHTML);

console.log(`==========getElementsByClassName() API ==========`);
const liRoles = document.getElementsByClassName("roles");
console.log(liRoles[0].innerHTML);
console.log(liRoles[1].innerHTML);

console.log(`==========querySelector() API with Tag or element name==========`);
const elementP = document.querySelector("p");
console.log(typeof elementP);
console.log(elementP.innerHTML);

console.log(`==========querySelector() API with id ==========`);
const elementLiFirst = document.querySelector("#firstRole");
console.log(elementLiFirst.innerHTML);

console.log(`==========querySelector() API with class ==========`);
const elementsRole = document.querySelector(".roles");
console.log(elementsRole.innerHTML);

console.log(
  `==========querySelectorAll() API with element name or Tag name ==========`
);
const elementsP = document.querySelectorAll("p");
for (const element of elementsP) {
  console.log(element.innerHTML);
}

console.log(
  `==========querySelectorAll() API with element name or Tag name ==========`
);
const elementsRoles = document.querySelectorAll(".roles");
for (const element of elementsRoles) {
  console.log(element.innerHTML);
}

console.log(`==== Changing Project name========`);
const projectElement = document.querySelector("#projectName");
projectElement.innerHTML = "Project Title: College Management System";
projectElement.style.color = "red";

console.log(`==== Changing Attribute ========`);
const elementLink = document.querySelector("#visitLink");
elementLink.setAttribute("href", "https://www.w3schools.com/");
elementLink.setAttribute("target", "_self");

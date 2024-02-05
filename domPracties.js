// what is DOM?
// When A Web page is created then brawser will create DOM(Document Object Model) of the Page.
// console.dir(document.body);
// console.log(document.body);

//change the background Color when i was click on button

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   document.body.style.background = "black";
//   document.body.style.color = "white";
// });

//i want to change heading from javascript
// document.body.childNodes.h1.innerText = "heading1";

//Select element Using Id,Class,tag name
// you an access using 2 ways
//1. getElementBy
// a. getElementById
// b. getElementsByClassName
// c. getElementsByName
//2. querySelector:(Name,Id,Class)
//3. querySelectorAll:(Name,Id,Class)

// const headingVal = document.getElementById("heading");
// console.dir(headingVal);

// const paragraph = document.getElementsByClassName("para");
// console.log(paragraph);

// const headingSix = document.getElementsByName("h6");

const firstChldNode = document.querySelector("div").firstChild;
console.dir(firstChldNode);

//if you want to select and print childer
const divChilderen = 
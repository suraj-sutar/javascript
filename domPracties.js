// -----------------------------what is DOM?------------------
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

//-----------------------Select element Using Id,Class,tag name--------------
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

// const firstChldNode = document.querySelector("div").firstChild;
// console.dir(firstChldNode);

//if you want to select and print childer
// const divChilderen = document.body.children;
// console.log(divChilderen);

//innerText: it retrun text content in the element
// let divtextContent = document.body.children[0].innerText;
// console.log(divtextContent);

//innerHTML: it return HTML content in the element
//this statement return div of children[0] that is first div
// let htmlContent = document.body.lastChild.children[0].innerHTML;
// console.log(htmlContent);

//if you want to access or print div child
//then first select that div using querySelector and then apply children
//usiing this you can  print hole div element available in the div
// const divChild = document.querySelector("div").children;
// console.log(divChild);

//if you want specific element then you use children[];
// const specificDivelement = document.querySelector("div").children[1];
// console.log(specificDivelement);

//--------------------------------what is firstChild?-------------------------------
//returns the node's first child in the tree, or null if the node has no children.

//what is the different output of using whitespace ot not using whitespace
//here we are using whitespace after p tag so it will return #text
{
  /* <p id="para-01">
<span>First span</span>
</p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script> */
}

// const pChild = document.querySelector("p").firstChild;
// console.log(divChild);

//ite will retrun on console #text

// use another example
{
  /* <p id="para-01"><span>First span</span></p>

<script>
  const p01 = document.getElementById("para-01");
  console.log(p01.firstChild.nodeName);
</script> */
}
// const pChild = document.querySelector("p").firstChild;
// console.log(divChild);
//it will return span

// To avoid the issue with node.firstChild returning #text or #comment nodes,
// Element.firstElementChild can be used to return only the first element node.

// -------------------------------What is lastChild----------------------
// returns the last child of the node.

// -----------------------------practice Questions 1-----------------
//create a h2 heading element with text- "Hello javaScript".append "From Apna College Student " to this using JS
//first select the that element
// const heading = document.querySelector("h2");
// heading.innerText = heading.innerText + " From Apna College";
// console.log(heading);

// -----------------------------practice Questions 2-----------------
// create 3 divs with common class name - "box" .Access them & add some unique text to each of them
//querySelectorAll it will retrun a new array so i will access the nodes using position
const accessDiv = document.querySelectorAll(".box");
// console.dir(accessDiv);
// accessDiv[0].innerText = "Div One";
// accessDiv[1].innerText = "Div Two";
// accessDiv[2].innerText = "Div Three";

//this is doing in another way using for of loop
// let index = 0;
// for (const div of accessDiv) {
//   //   console.log(div.innerText);
//   div.innerText = `New Value ${index}`;
//   index++;
//   console.log(div);
// }

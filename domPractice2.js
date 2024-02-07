// concept -------------------------getAttribute and setAttribute-----------------------------
//if you want to get attribute of element then use getAttribute(attr,val);
// //first select the element
// const divElement = document.querySelector("div");

// //to get class attribute value
// const classOfDiv = divElement.getAttribute("class");
// console.log(classOfDiv);

// //to get name attribute value
// const nameOfDiv = divElement.getAttribute("name");
// console.log(nameOfDiv);

// const parag = document.querySelector("p");
// parag.style.color = "red";

// //to get class attribute value of paragraph
// const classOfP = parag.getAttribute("class");
// console.log(classOfP);

// //to get text of parag
// const textOfPara = parag.innerText;
// console.log(textOfPara);

// // to set attribute value
// const setVlaueOfPara = parag.setAttribute("class", "content");

//i have seen 1. access element 2. change Element 3. add element
//------------------------------------3.Add Element-----------------------------
// For adding element first you have to create that element and then add
//how to create element:
// let btn = document.createElement("button");
// btn.innerText = "Click";

//add new element at the end using append
// const div = document.querySelector("div");
// div.append(btn);

//add new element at start of the element
// div.prepend(btn);

//add new element before the element block
// div.before(btn);

//add new element after the element block
// div.after(btn);

// example: create on eheading and add top of the page
// const newHeading = document.createElement("h1");
//add Some heading to display in html page
// newHeading.innerText = "Hyyy This Is Heading";

// document.querySelector("body").prepend(newHeading);

// ---------------------------------------remove Element-----------------------------------
// first select Element
// const para = document.querySelector("p");
// para.remove();

// ----------------------------Practice Question----------------------------
//create a new button element .Give it text "Click me" , background color of red and text color of white
//insert the button as the first element inside the body tag
//first create button element using createElement
// const btn = document.createElement("button");

//second give it text click me using innerText
// btn.innerText = "Click Me";

//third set background color red
// btn.style.backgroundColor = "red";

//forth set color white
// btn.style.color = "white";

//insert create button as the first using prepend method
//first select body tag using querySelector

// const bodyTag = document.querySelector("body").prepend(btn);

// ----------------------------Practice Question----------------------------
//create a <p> tag in html,give it a class & some styling.
//Now create a new class in css and try to append this class to the <p> element

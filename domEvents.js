//this is second way to use event
// let btnOne = document.querySelector(".btn1");
// btnOne.onclick = () => {
//   console.log(`click`);
// };

//Event Object
//node.event = (evt) => {

// }
//There are Number Of Events some of them:
//target: it return target element
//event: onclick,onmouseover ect
//clientX and clientY: it return pointer click position

//this is third way to use events that is Event Listeners
// let btnTwo = document.querySelector(".btn2");
// btnTwo.addEventListener("dblclick", () => {
//   console.log(`click`);
// });

// -------------------------------------practice Question------------------------------
//create a toggle button that change the screen to dark-mode when clickk and light-mode when clicked again

// let modebtn = document.querySelector("#btn");
// //to store current mode value
// let currMode = "light";
// modebtn.addEventListener("click", () => {
//   //   document.body.style.backgroundColor = "black";
//   if (currMode === "light") {
//     currMode = "dark";
//     document.querySelector("body").style.backgroundColor = "black";
//   } else {
//     currMode = "light";
//     document.querySelector("body").style.backgroundColor = "white";
//   }
//   console.log(currMode);
// });

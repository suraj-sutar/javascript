//prompt the user to enter their full name.
//generete a username for them based on the input.
//start username with @ , Followed by their full name and ending with the fullname length.

let userInput = prompt("Enter Your Full Name Without Space:");

let strLength = userInput.length;

//concate
let newString = "@" + userInput + strLength;

console.log(newString);

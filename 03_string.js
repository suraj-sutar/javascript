var greet = "Good Morning";
var totalChar = greet.length;
console.log("Total character in the string is: ", totalChar);

//charAt() method
var charAtIndex5 = greet.charAt(5);
console.log("Char present at index 5 is:", charAtIndex5);
console.log(typeof charAtIndex5);

//concat() method
var str1 = "Hey ";
var str2 = "Smarty";
var concatResult = str1.concat(str2);
console.log("Concatted String is: ", concatResult);

//indexOf() method
var indexOfD = greet.indexOf("D");
console.log("Index of D is: ", indexOfD);
var indexOfd = greet.indexOf("d");
console.log("Index of d is: ", indexOfd);

var indexOfnin = greet.indexOf("nin");
console.log("Index of nin is: ", indexOfnin);

//lastIndexOf() method
var indexOfo = greet.lastIndexOf("o");
console.log("Index of o is: ", indexOfo);

// replace() method
var myName = "Gajanan Kharat";
var result = myName.replace("Kharat", " Bill");
console.log(result);

// trim() method
var city = "  Pune  ";
console.log(city.length);
var trimResult = city.trim();
console.log(
  ` After trim city is: ${trimResult}, It's length is: ${trimResult.length} `
);

var city = "  Pune  ";
console.log("string length: ", city.length);

var trimResult = city.trim();

console.log(
  `After trim city is: ${trimResult},
  Its length is : ${trimResult.length}`
);

// toString() method
var num = 15;
var result = num.toString();
console.log(` Number is ${num} and it's type is ${typeof num} `);
console.log(
  ` After conversion number is ${result}, it's type is ${typeof result}`
);

//includes() method
var greet = "Good Morning";
var isAvailable = greet.includes("ing");
console.log(` Is substring "ing" available => ${isAvailable}`);

// slice() method
var result = greet.slice(5, 10);
console.log(` Slice is ${result}  `);

// split() method
var word = "Jenny Herry";
var result = word.split(" ");
console.log(result);
console.log(` Total words in the string is: ${result.length} `);
console.log(typeof result);

var givenString = "Hey I am UI and Java Developer";
var result = givenString.split(" ");
console.log(result);
console.log(`Total words in string is: ${result.length}`);

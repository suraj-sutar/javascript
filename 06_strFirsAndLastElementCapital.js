function strFirstAndLastElementCapital(str) {
  console.log(`Given String: " ${str} "`);
  //first split the string to convert it into words
  let splitStr = str.split(" ");
  //create empty array to to store the words
  let emptyArray = [];

  //third create for of loop to get word separately
  for (const word of splitStr) {
    //then make first  element of word capital usning chatAt() method
    let firstElement = word.charAt(0).toUpperCase();
    //then make last  element of word capital usning slice() method
    let lastElement = word.slice(-1).toUpperCase();

    //add first element middle element and last element
    let addString = firstElement + word.slice(1, -1) + lastElement;

    //after that push this string into empty array
    emptyArray.push(addString);
  }

  // Before join this string is separate word of array so add this all element using join method
  let joinString = emptyArray.join(" ");
  return joinString;
}

let result = strFirstAndLastElementCapital("how are you mate");
console.log(
  `After Converting the First and Last Character in Upper Case: " ${result} "`
);

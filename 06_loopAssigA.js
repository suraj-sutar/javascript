console.log(`--------------------------step 1--------------------------`);

function countVowels(str) {
  var vowelsCount = 0;
  for (let index = 0; index <= str.length; index++) {
    let char = str.charAt(index).toLowerCase();
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      vowelsCount = vowelsCount + 1;
    }
  }
  console.log(`Total Count Of Vowels in Given String is: ${vowelsCount}`);
}
countVowels("I am very good IT Developer");

console.log(`--------------------------step 2--------------------------`);

function sumOfCube() {
  var sum = 0;
  for (let index = 1; index <= 5; index++) {
    //first calculate cube of index
    var cubeOfIndex = index * index * index;
    // console.log(result);

    //add that cube of index value into the sum

    sum = sum + cubeOfIndex;
  }
  console.log(`Total Sum Of Cube Of Number is: ${sum}`);
}
sumOfCube();

console.log(`--------------------------step 3--------------------------`);

function oddPositionedChars(str1) {
  // console.log(
  //     `To replace the space with character i use replace() method....`
  // );
  for (let index = 0; index <= str1.length; index++) {
    // let replaceStr = str1.replace(/\s/g, "");

    let char = replaceStr.charAt(index);
    if (index % 2 != 0 && char !== " ") {
      console.log(char);
    }
  }
}
console.log(`First Given String Odd position Character: `);
oddPositionedChars("Hard work always pays back");
console.log("--------------------------------------------");
console.log(`Second Given String Odd position Character: `);
oddPositionedChars("Soon i will be UI IT Champ");

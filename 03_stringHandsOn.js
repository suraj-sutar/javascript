function stringHandsOn() {
  var givenString = "    Hey you are doing good, keep it up    ";

  //1
  console.log(`Given String: ${givenString}`);
  console.log("");

  //2
  var calLength = givenString.length;
  console.log(`Total Length Of String Is: ${calLength}`);
  console.log("");

  //3
  var trimString = givenString.trim();
  console.log(
    `After trim String is: ${trimString},   It's length is: ${trimString.length}`
  );
  console.log("");

  //4
  var calRemoveSpace = givenString.length - trimString.length;
  console.log(
    `Print the total number extra spaces count that is removed: ${calRemoveSpace}`
  );
  console.log("");

  //5

  console.log(
    `First Charecter after trim: ${trimString.charAt(
      0
    )}, Last Charecter after trim: ${trimString.charAt(trimString.length - 1)}`
  );
  console.log("");

  //6
  var result = trimString.split(" ");
  console.log(`Total words in string is: ${result.length}`);
  console.log("");

  //7
  var indexgood = trimString.indexOf("good");
  console.log(`Index Of Word "good": ${indexgood}`);
  console.log("");

  //8
  var subString = trimString.substring(22);
  console.log(`Print the substring strating from index 22: ${subString}`);
  console.log("");

  //9
  var subString = trimString.lastIndexOf("up");
  console.log(`Print the substring Ending with word 'up' : ${subString}`);
  console.log("");

  //10
  var subString = trimString.indexOf("Hey");
  console.log(`Print the substring Ending with word 'up' : ${subString}`);
  console.log("");
}
stringHandsOn();

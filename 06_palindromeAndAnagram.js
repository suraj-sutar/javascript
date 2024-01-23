console.log(
  `------------------------------Step 1------------------------------`
);
function isPalindrome(str) {
  let rev = str.split("").reverse().join("");
  if (rev == str) {
    return "is Palindrome";
  }
  return "is Not a Plindrome";
}
let str1 = isPalindrome("madam");
console.log(`String madam ${str1}`);
console.log("");
let str2 = isPalindrome("dad");
console.log(`String dad ${str2}`);
console.log("");
let str3 = isPalindrome("hello");
console.log(`String hello ${str3}`);
console.log("");
console.log(
  `------------------------------Step 2------------------------------`
);

function checkAnagram(str1, str2) {
  const resultStr1 = str1.toLowerCase().split("").sort().join("");
  const resultStr2 = str2.toLowerCase().split("").sort().join("");
  return resultStr1 == resultStr2 ? true : false;
}
let result = checkAnagram("Silent", "Listen");
console.log(`Given String Silent and Listen are Anagram: ${result}.`);
console.log("");
let result1 = checkAnagram("Hello", "World");
console.log(`Given String Hello and World are Anagram: ${result1}.`);
console.log("");
let result2 = checkAnagram("Such", "much");
console.log(`Given String Hello and World are Anagram: ${result2}.`);

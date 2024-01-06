function reverseString(str) {
    var result = "";
    for (let index = str.length - 1; index >= 0; index--) {
        result = result + str.charAt(index);
    }
    console.log(`Revers String : ${result}`);
}
console.log(`First Given String: `);
reverseString("Hard word always pays back");
console.log(`Second Given String`);
reverseString("Soon I will be Angular IT Champ");
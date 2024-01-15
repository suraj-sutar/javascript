function factorialOfWordsCount(str) {
    if (str == 0 || str == 1) {
        return 1;
    }
    if (str < 0 || str == null || str == undefined) {
        return `Invalied Input That is Nigative number`;
    }
    let splitStr = str.split(" ");
    let countWords = splitStr.length;

    let fact = 1;
    for (let index = 1; index <= countWords; index++) {
        fact = fact * index;
    }
    return fact;
}
let factorial1 = factorialOfWordsCount("Revision is the mother of Success");
console.log(`Factorial Of Given String is: ${factorial1}`);
console.log(`--------------------------------------------------`);
let factorial2 = factorialOfWordsCount(
    "We never fail, we always learn, Mind it"
);
console.log(`Factorial Of Given String is: ${factorial2}`);
console.log(`--------------------------------------------------`);
let factorial3 = factorialOfWordsCount();
console.log(`Factorial Of Given String is: ${factorial3}`);
console.log(`--------------------------------------------------`);
let factorial4 = factorialOfWordsCount("");
console.log(`Factorial Of Given String is: ${factorial4}`);
console.log(`--------------------------------------------------`);
let factorial5 = factorialOfWordsCount("Suraj Tanaji Sutar");
console.log(`Factorial Of Given String is: ${factorial5}`);
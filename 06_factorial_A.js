function factorialOfNum(num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    if (num < 0 || num == null || num == undefined) {
        return `Invalied Input That is Nigative number`;
    }
    let fact = 1;
    for (let index = 1; index <= num; index++) {
        fact = fact * index;
    }
    return fact;
}
let Factorial = factorialOfNum(5);
console.log(`Factorial of given Number 5 is: ${Factorial}`);

console.log(`--------------------------------------------------`);
let factorial1 = factorialOfNum(3);
console.log(`Factorial of given Number 3 is: ${factorial1}`);
console.log(`--------------------------------------------------`);
let factorial2 = factorialOfNum(null);
console.log(`Factorial of given Number null is: ${factorial2}`);
console.log(`--------------------------------------------------`);
let factorial3 = factorialOfNum(8);
console.log(`Factorial of given Number 8 is: ${factorial3}`);
console.log(`--------------------------------------------------`);
let factorial4 = factorialOfNum(undefined);
console.log(`Factorial of given Number undefined is: ${factorial4}`);
console.log(`--------------------------------------------------`);
let factorial5 = factorialOfNum(9);
console.log(`Factorial of given Number 9 is: ${factorial5}`);
console.log(`--------------------------------------------------`);
let factorial6 = factorialOfNum(0);
console.log(`Factorial of given Number 0 is: ${factorial6}`);
console.log(`--------------------------------------------------`);
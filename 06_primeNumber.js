function isPrime(num) {
  for (let index = 2; index < num; index++) {
    if (num % index == 0) return false;
  }
  return true;
}
let result = isPrime(4);
console.log(`Given Number is Prime Number --> ${result}`);

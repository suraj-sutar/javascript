// A function takes function as an parameter and return function
function greet(callback) {
  console.log(`Inside greet function...`);
  callback();
  //then retun another function
  return function () {
    console.log(`Returning one more function....`);
  };
}
const talk = function () {
  console.log(`Good Morning`);
};
//retrun function as an argument
const returnFunction = greet(talk);
returnFunction();
//greet(talk)();

console.log(
  `--------------------Step 1: WAP to print numbers from 5 to 15 by incrementing 1.--------------------`
);

for (let index = 5; index <= 15; index++) {
  console.log(index);
}

console.log(
  `--------------------Step 2: WAP to print numbers from 50 to 40 by decrementing 1.--------------------`
);

for (let index = 50; index >= 40; index--) {
  console.log(index);
}

console.log(
  `--------------------Step 3: WAP to find first 15 odd Number.--------------------`
);

count = 0; //count = 1,2
for (let index = 1; count <= 15; index = index + 2) {
  //index = 3,5
  console.log(index);
  count++;
}

console.log(
  `--------------------Step 4: WAP to find first 10 Even Number.--------------------`
);

count = 0;
for (let index = 2; count <= 10; index = index + 2) {
  console.log(index);
  count++;
}

console.log(
  `--------------------Step 5: WAP to Print table of 5.--------------------`
);

var num = 5;
for (var i = 1; i <= 10; i++) {
  //2
  console.log(num * i); //2
}

console.log(
  `--------------------Step 6: WAP to Print table of 10.--------------------`
);

var num = 10;
for (var i = 1; i <= 10; i++) {
  //2
  console.log(num * i); //2
}

console.log(
  `--------------------Step 7: WAP to Print table of 10 in reverse order.--------------------`
);

var num = 10;
for (var i = 10; i >= 1; i--) {
  //9
  console.log(num * i); //(10 * 9)
}

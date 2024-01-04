function monthOfYear(monthNum) {
  switch (monthNum) {
    case 1:
      console.log(`Month Number ${monthNum} --> January `);
      break;

    case 2:
      console.log(`Month Number ${monthNum} --> February `);
      break;

    case 3:
      console.log(`Month Number ${monthNum} --> March `);
      break;

    case 4:
      console.log(`Month Number ${monthNum} --> April `);
      break;

    case 5:
      console.log(`Month Number ${monthNum} --> May `);
      break;

    case 6:
      console.log(`Month Number ${monthNum} --> June `);
      break;

    case 7:
      console.log(`Month Number ${monthNum} --> July `);
      break;

    case 8:
      console.log(`Month Number ${monthNum} --> August `);
      break;

    case 9:
      console.log(`Month Number ${monthNum} --> September `);
      break;

    case 10:
      console.log(`Month Number ${monthNum} --> October `);
      break;
    case 11:
      console.log(`Month Number ${monthNum} --> November `);
      break;
    case 12:
      console.log(`Month Number ${monthNum} --> December `);
      break;

    default:
      console.log(`Invalied Input --> Month Number ${monthNum}`);
      break;
  }
}
monthOfYear(0);
console.log("");

monthOfYear(2);
console.log("");

monthOfYear(5);
console.log("");

monthOfYear(12);
console.log("");

monthOfYear(15);
console.log("");

monthOfYear(100);
console.log("");

monthOfYear(null);
console.log("");

monthOfYear(undefined);
console.log("");

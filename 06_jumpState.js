// these two are jump statement
//continue and break statement

// Break statement stops the entire process of the loop.
// The break statement is used to terminate the execution of the current loop.
//  Whenever there is a need to end the loop, you need to add the break statement.
// Once the break statement is met, all the iterations are stopped, and the control is shifted outside the loop.

// Continue statement only stops the current iteration of the loop.
// The continue statement is used to move to the next iteration,
// it is also used for termination, but unlike break, it is not used to terminate the entire execution of the loop but only the current iteration of the loop.
for (let index = 0; index <= 5; index++) {
    if (index == 2) {
        break;
    }
    console.log(index);
}
console.log(" =================== ");
for (let index = 0; index <= 5; index++) {
    if (index == 2) {
        continue;
    }
    console.log(index);
}
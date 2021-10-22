/* Activity 1
Take this code and turn it into arrow function syntax
*/

// function factorial (n) {
//     if ((n === 0) || (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial (n -1));
//     }
// }
// console.log(factorial(33));


// const factorial = (n)  => {
//     if ((n === 0) || (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial (n -1));
//     }
// }
// console.log(factorial(33));

/* Activity 2
Edit the below snippet to include two parameters and a running order count updated when the function is called
*/

// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}`);
//     orderCount++;
// }

// takeOrder("Pinneaple", "Bacon");

/* Activity 3
Cash machine time!
*/

const pin = 1234;
// let balance = 1000;
// let amount = 50;
//newB = (balance - amount);

const withDraw = (amount, balance) => {
    if (pin == 1234 && amount <= balance ) {
        let left = (balance - amount);
        console.log(`Here you go!, your new balance is ${left}`);
    } else if (pin != 1234) {
        console.log("Pin incorrect, try again");
    } else {
        console.log("Not enough founds...");
    }
}
withDraw(50, 1000);
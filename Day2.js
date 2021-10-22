/* Create a program that s/tores someone’s name,
age and favourite colour and log it to the console
in a complete sentence using Template Literals. 
*/

// let name = "Luis"
// let age = "29"
// let favColor = "Purple"

// let answer = (`My name is ${name}, I'm ${age} and my favourite color is ${favColor}`)

// console.log(answer)
// name = "Joe"
// age = "25"
// favColor = "red"

// console.log(answer)





/* Create a program that stores what you eat today
for breakfast, lunch and dinner.
*/

// let breakfast = "cereals"
// let lunch = "burger"
// let tea = "pizza"
// console.log(`Menu for today is ${breakfast} at breakfast, ${lunch} for lunch and ${tea} for dinner`)

// breakfast = "coffee"
// lunch = "salad"
// tea = "soup"

// console.log(`Menu for today is ${breakfast} at breakfast, ${lunch} for lunch and ${tea} for dinner`)




/*Create a program that calculates the number
of days from today to your birth date. 
*/

// let today = Date.now();
// const bDay = new Date('September, 19, 2022');
// let time = bDay - today;
// let days = time / (86400000); 
// console.log(days);




/*> Create 9 variables: space1, space2… space9.
> Assign either the value ‘x’,’o’,’ ‘, to each of
these variables.
> Insert the variables into your board using the
${varName} syntax and make it look like the
displayed board.
*/

let space1 = 'x'
let space2 = 'o'
let space3 = ''
let space4 = 'x'
let space5 = 'o'
let space6 = ''
let space7 = 'x'
let space8 = 'o'
let space9 = ''

/*
let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";
let space0 = " ";
let i = "|";
let j = "-----------";

console.log (`${space0}${i}${space0}${i}`);
console.log (`${space1}${i}${space2}${i}${space3}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space4}${i}${space5}${i}${space6}`);
console.log (`${space0}${i}${space0}${i}`);
console.log(`${j}`);
console.log (`${space0}${i}${space0}${i}`);
console.log (`${space7}${i}${space8}${i}${space9}`);
console.log (`${space0}${i}${space0}${i}`);
*/




// If and Else!
// let weather = "windy";
// if (weather == "sunny"){
//     console.log("This is once a year!");
// } else if (weather == "rainy"){
//     console.log ("Time to watch some Netflix");
// } else if (weather == "windy"){
//     console.log("noooope");
// } else {
//     console.log("You sure that's weather?");
// }


// Iqual and Strict iqual
// let i = 10;
// let j = "10";

// if (i === j) {
//   console.log("True")
// } else {
//   console.log("False")
// }
// Is False! i is a number, j is a string ( "" ) !!

let place = "Manc";
let weather = "cloudy";

if (place == "Manc" && weather == "sunny"){
    console.log("Check again")
}
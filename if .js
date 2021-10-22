/* Activity 1
Create a variable called age. Write an if statement
*/

// let age = 19;
// let county = "UK";
// if (age > 17 && county === "UK"){
//     console.log("Single or Double?");
// } else {
//     console.log("Sorry, this is for grown english people only"); //Kiddin'!! <3
// }





/* Activity 2
Create a variable for any pizza topping.
*/

// impIngr = ("Cheese");
// dontMind = ("Pepperoni");
// brave = ("Pineapple");
// dontLike = ("Goat cheese");

// switch (brave){
//     case 'Cheese':
//         console.log(`${impIngr} is an important ingredient`);
//         break;
//     case 'Pepperoni':
//         console.log(`I don't mind ${dontMind} on it`);
//         break;
//     case 'Pineapple':
//         console.log("You're brave enough to say it! I'm with you...");
//         break;
//     case 'Goat cheese':
//         console.log(`${dontLike}?? Ehmm... NEXT!`);
// }




/* Activity 3
Create a variable called password.
Check how many letters are in the password
*/
// let password = "123456";

// if (password.length < 8){
//     console.log("The password is too short, you're not secure!");
// } else {
//     console.log(password);
// }

// let num = 15;
// if(num % 3 === 0 && 5 === 0){
//     console.log("The number is divisible by 3 and 5. Jackpot!")
// } else {
//     console.log("Try again!")
// }



/* Activity 4
Create a variable called num.
If num is divisible by 3 log “fizz” to the console, if it’s divisible by
5 log “buzz” to the console, if it’s divisible by both 3 and 5 log
“fizz buzz” to the console. Otherwise log num to the console
*/

// num = 3;

// if(num % 3 === 0  && num % 5 === 0){
//      console.log("Fizz Buzz!");
//  } else if (num % 5 === 0){
//      console.log("Buzz");
// } else if (num % 3 === 0){
//     console.log("Fizz");
// } else {
//     console.log("Try again!");
// }





/* Activity 5
Create a variable called num.
Check if the number is a palindrome
*/

// let palindrome = 1001;
// let reversPalin = palindrome.toString().split('').reverse().join('');

// if (palindrome == reversPalin){
//     console.log("This number is a palindrome");
// } else {
//     console.log("This number is not a palindrome");
// }

 // program to check if the string is palindrome or not (copyyy)
//  num = "56";
//  function checkPalindrome(num) {

//      // find the length of a string
//      const len = num.length;

//      // loop through half of the string
//      for (let i = 0; i < len / 2; i++) {
//          // check if first and last string are same
//          if (num[i] !== num[len - 1 - i]) {
//              return 'It is not a palindrome';
//          }
//      }
//      return 'It is a palindrome';
//  }

//  // call the function
//  const value = checkPalindrome(num);

//  console.log(value);





/* Activity 6
Create an if statement that
logs to the console where someone is at times of the day
*/

// let time = 9;
// let placeOfWork = "Hard Rock Cafe";
// let townOfHome = "Manchester";

// if (time === 7){
//     console.log (townOfHome);
// }else if (time === 9) {
//     console.log(placeOfWork)
// } else if(time === 8) {
//     console.log("I'm commuting")
// }





/* Activity 7
Find the index of a last vowel in the string.
*/

//  let sentence = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
//  console.log(sentence.lastIndexOf("i"))

// // let lastVowel = sentence.slice(-1);
// // let length = sentence.length;

// // console.log("This string has" + " " + length + " " + "chars");
// // console.log(`The last vowel is ${lastVowel}, in the position ${length}`);



//-----------------------------------

// Activity 7
let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
let vowelArr = ['a', 'e', 'i', 'o', 'u'];
let highestIndex =0;
// counter go through whole array using length as limiter
for (let i = 0; i < vowelArr.length; i++){
  console.log(string.lastIndexOf(vowelArr[i]));
// gets index of vowel in current iteration
    index = string.lastIndexOf(vowelArr[i]);
// compares current index to find highest index
if (index >= highestIndex ){
// so new highestindex becomes index
    highestIndex = index;
// won't reach last two nums in vowelarray
    lastVowel = vowelArr[i];
}
}



// --------------------------------



/* Activity 8
checks if the last letter is the same as the first
*/

// let word = "huhu";
// if (word.charAt() == word.charAt(word.length-1)){
//     console.log("True");
// } else {
//     console.log("False");
// }




/* Activity 9
checks if the last letter is the same as the first
*/
    // num1 = 10;
    // num2 = 5;

    // if ((num1 + num2) % 2 == 0){
    //     console.log(`The result of the sume is even`);
    // } else {
    //     console.log(num1*num2);
    // }
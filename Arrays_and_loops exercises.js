/* Excercise 1
Create an array that lists your favourite films, up to 5 elements. Add 2 more using a method.
Use a loop to cycle through the array.
*/

// favFilms = [
//     "Inception",
//     "Whiplash",
//     "World of Warcraft"
// ];
// favFilms.push("Godfather", "Untouchable");
// console.log(favFilms);  

// for (let i = 0; i < 5; i++ ){
//     console.log(favFilms[i])
// }




/* Excercise 2
Generate 6 random numbers between 1-50
*/

// let num;
// for(let i = 0; i <= 6; i++) {
//     num = Math.floor(Math.random() * 50);
//     console.log(num);
// }




/* Excercise 3
If we can create a loop to put 0-9 on the screen, how can we count from 9-0?
*/

// for(let i = 0; i <= 9; i++){
//     console.log(arr);
// }

// let start = 1;
// let end = 9;

// let arr = [];

// while(start <= end){
//   arr.push(start++);
// }
// console.log(arr);
// rev = arr.reverse().join('');
// console.log(rev);




/* Excercise 4
Displays 4 films stored in an array.
Use a for loop to show each film in the array.
Use an if statement to check if the 3rd film in the array is
Ghostbusters.
*/

// let favFilms = [
//     "Inception",
//     "Whiplash",
//     "World of Warcraft",
//     "Godfather"
// ];
// //  console.log(favFilms);

// for(let i = 0; i < 4; i++){
//     // console.log(favFilms[i]);
//     if ( i = favFilms[2] = "Ghostbusters"){
//         console.log("Yay it’s Ghostbusters");
//     } else {
//         console.log("Boo! We want Ghostbusters!");
// }

// }





/* Excercise 5
Create a variable, generate a
random number between 1 and
30 six times, each random
number generated, check if this
number of divisible by 7 or not.
*/

// let num;

// // let floor = num.floor(); // BAAAD! .floor only works with "Math"!!
// for (let i = 0; i <= 5; i++){
//     num = (Math.floor(Math.random()*30))
//     console.log(num);
//     if(num % 7 == 0){
//         console.log("It's divisible by 7")
//     } else {
//         console.log("It's not divisible by 7")

//     }
// }



/* Excercise 6
Imagine you’re a programmer for a social media platform! You have
been tasked with building a prototype for a mutual followers program
*/

// let witoFoll = ["Joe", "Saskia", "Emma", "Jordi" ];
// let luisFoll = ["Saskia", "Jordi", "Mei", "Kate" ];

// for (let i = 0; i < witoFoll.length; i++) {
//     for (let w = 0; w < luisFoll.length; w++) {
//         if (witoFoll[i] === luisFoll[w]) {
//            // commonFoll.push(luisFoll[w]);
//            console.log(witoFoll);
//         }
//         //console.log(commonFoll);
//     }
// }



// let dansFollowers = ["bill", "bob", "bert", "ben", ];
// let fransFollowers = ["barry", "bernard", "bill", "bob"];
// let mutualFollowers = []


// for (let i = 0; i < dansFollowers.length; i++) {
//     for (let j = 0; j < fransFollowers.length; j++) {
//         if (dansFollowers[i] === fransFollowers[j]) {
//             mutualFollowers.push(fransFollowers[j]);
//         }
//         console.log(mutualFollowers)
//     }
// }









/* Activity 1
Let’s edit our person object to include…
A function called sayHi and when it’s called, it
should return “Hello my name is ${this.name}”
*/


// let person = {
//     name: "Luis",
//     age: 29,

//     sayHi(){
//         return (`Hello my name is ${this.name}`);
//     }
    
// }
// console.log(person.sayHi());





/* Activity 2
Create an object called pet with the key values of:
name, typeOfPet, age, colour
And methods called eat and drink. They should return a
string saying [Your Pet Name] is eating/drinking. 
*/

// let pet = {
//     name: "Nero",
//     typeOfPet: "cat",
//     age: 4,
//     colour: "Black & White",
//     drinks: ["water", "milk"],
//     foods: ["dry food", "wet food"],
//     conditions: ["thursty", "Hungry"],
 
//     drinking(){
//         return (`Your ${this.typeOfPet}, ${this.name}, is drinking ${this.drinks[0]}. He won't be ${this.conditions[0]} with us!`);
//     },
//     eating(){
//         return (`${this.name} is eating ${this.foods[1]}`);
//     }
// }
// console.log(pet.drinking());





/* Activity 3
Create an object called coffeeShop with key values of:
branch, drinks with prices, food with prices
And methods called drinksOrdered and foodOrdered.
They should return a string saying [Your order] is … with all
items chosen with costs and total costs.
*/

coffeeShop = {
    branch: "Wito's",
    drinks: ["Soda", "Beer", "Wine"],
    drinkPrices: [3, 5, 7.5],
    meals: ["BBQ Wings", "Cheesburger", "Double Cheeseburger"],
    foodPrices: [8.5, 12, 15],

    drinksOrdered(){
        return (`${this.drinks[2]}`);
    },
    foodOrdered(){
        return (`${this.meals[0]}`);
    },
    totalPrice(){
        return (this.drinkPrices[2] + this.foodPrices[0]);
    }
}
console.log(`Your drink order is ${coffeeShop.drinksOrdered()} which costs £${coffeeShop.drinkPrices[2]} and 
${coffeeShop.foodOrdered()} for £${coffeeShop.foodPrices[0]}. A total of £${coffeeShop.totalPrice()} `)



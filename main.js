//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizzas:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_creams:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        otherwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// for (let i in Object.values(person3)) {
//     if (Array.isArray(Object.values(person3)[i])) {
//         for (let j in Object.values(person3)[i]) {
//             if (typeof Object.values(person3)[i][j] == 'object') {
//                 for (let k in Object.values(Object.values(person3)[i][j])) {
//                     console.log(Object.values(Object.values(person3)[i][j])[k])
//                 }
//             } else {
//                 console.log(Object.values(person3)[i][j])
//             }
//         }
//     } else {
//         console.log(Object.values(person3)[i])
//     }
// }

Object.keys(person3).forEach(type => {
    if (Array.isArray(person3[type]) && typeof person3[type][0] == 'object') {
        console.log(`My favorite ${type}:`)
        for (const [k,v] of Object.entries(person3[type][0])) {
            console.log(`${k}: ${v}`)
        }
    } else {
        console.log(`My favorite ${type} are ${person3[type]}`)
    }
})

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }

    // Use an arrow to create the printInfo method
    printInfo = () => {console.log(`Name: ${this.name} \nAge: ${this.age}`)};

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    count_up = (num) => { console.log(`${this.name} is now ${this.age+num} years old`); return this.age+=num };

}

let person = new Person('Jane', 20);
person.printInfo()
person.count_up(1)
person.count_up(3)



// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small word"
*/

function countString(s) {
    if (s.length > 10) return 'Big Word'; else return "Small Word";
}

async function checkString(s) {
    const res = await countString(s)
    console.log(res)
    return res
}

checkString('hello')
checkString('abcdefghijk')

// Highest and Lowest
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number){
    let sum = 0
    if (number < 0) {
        return 0
    } else {
        for (let i = 3; i < number; i++) {
            if (i%3==0 || i%5==0) {
                sum += i
            }
        }
        return sum
    }
}
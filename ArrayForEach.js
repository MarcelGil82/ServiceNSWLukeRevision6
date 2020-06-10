let numbers = [2, 5, 7, 19];

// these are different way to do loops

// foreach
// numbers.forEach((data) => {
//     console.log(data)
// });

//for of
// for (let data of numbers) {
//     console.log(data);
// }

//for loop
// for (let i = 0; i < array.length; i++) {
//     let data = numbers[i];
//     console.log(data)
// }

// Lukes Example
// function logData(data, index) {
// console.log(`${data} is at the ${index} of the array`)
// }

// numbers.forEach(logData)

// Declare an array of objects with properties name and age. 
// Use an array.forEach loop to iterate over each object and print the name and age of the object to the console. 
// Do the same using a for and for..of loop

let footballers = [
    {
        name: "Messi",
        age: 32
    }, {
        name: "Ronaldo",
        age: 35
    }, {
        name: "Suarez",
        age: 33
    }, {
        name: "Neymar",
        age: 28
    }
];

// forEach

// footballers.forEach(footballer => {
//     console.log(`${footballer.name} is ${footballer.age} years old.`)
// });

// for

// for (let i = 0; i < footballers.length; i++) {
//     let footballer = footballers[i];
//     console.log(`${footballer.name} is ${footballer.age} years old.`)
// }

// forOf

// for (let footballer of footballers) {
//     console.log(`${footballer.name} is ${footballer.age} years old.`)
// }
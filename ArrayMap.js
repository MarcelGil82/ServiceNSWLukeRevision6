//  lukes example

// let numbers = [2, 5, 4, 1, 7];

// function doubleNumber(num) {
//     return num * 2;
// }
// let numbersDoubled = numbers.map(doubleNumber);
// console.log(numbersDoubled) // output [ 4, 10, 8, 2, 14 ]

// let teachers = [
//     {
//         givenName: "Aliya",
//         surname: "Love",
//         subject: "Math"
//     }, {
//         givenName: "Mischa",
//         surname: "Sach",
//         subject: "History"
//     }, {
//         givenName: "Jenny",
//         surname: "Matthews",
//         subject: "Science"
//     }
// ];

// function teacherToPerson(teacher) {
//     return {
//         firstName: teacher.givenName,
//         lastName: teacher.surname
//     }
// }
// let teachersAsPeople = teachers.map(teacherToPerson);
// console.log(teachersAsPeople)

// Q1. Use the array.map function to convert an array of strings into an 
// array of the length of each of those strings

let animals = ["tiger", "bear", "elephant", "eagle"];

function stringToNumbers(animals) {
    return animals.length;
}
let animalLength = animals.map(stringToNumbers);
console.log(animalLength)

// Q2. Create an array of numbers. Use the array.map function to add 5 to each of those numbers
let numArray = [12, 98, 154, 64, 648];

function add5ToNum(numArray) {
    return numArray + 5;
}
let add5 = numArray.map(add5ToNum);
console.log(add5)

// Q3. Create an array of people with properties firstName and lastName. 
// Use the array.map function to create an array of the full names of each of the people.

myPeople = [
    {
        firstName: "John",
        lastName: "Nix"
    }, {
        firstName: "Jacob",
        lastName: "Nax"
    }, {
        firstName: "Jonah",
        lastName: "Nox"
    }
];

function createFullName(myPeople) {
    return `${myPeople.firstName} ${myPeople.lastName}`
}
let fullName = myPeople.map(createFullName);
console.log(fullName)

// Q4. Create an array of pets with properties name (string), age (number) and owner (object with name and age). 
// Use the array.map function to get an array of the names of all the owners.

let pets = [
    {
        name: "Spot",
        age: 3,
        owner: {
            ownerName: "John",
            age: 25
        }
    }, {
        name: "Fido",
        age: 6,
        owner: {
            ownerName: "Mack",
            age: 36
        }
    }
];

function getOwnersNames (pets) {
    return pets.owner.ownerName
}
let allOwnerNames = pets.map(getOwnersNames);
console.log(allOwnerNames)
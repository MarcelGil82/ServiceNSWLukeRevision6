// Lukes Example

let numbers = [2, 3, 1, 4, 2];
function multiplyReducer(acc, val) {
    return acc * val;
}

// let productOfNumbers = numbers.reduce(multiplyReducer);  // output 48
let productOfNumbers = numbers.reduce(multiplyReducer, 10); // output 480
// console.log(productOfNumbers)

let num1 = 12;
let num2 = 15;
// console.log(Math.max(num1, num2));
// console.log(Math.min(num1, num2));

// Q1. Create an array of numbers and use the array.reduce method to find the smallest number in the array

let myNumbers = [10, 9, 16, 5];

function findSmallestNum(num1, num2) {
    return Math.min(num1, num2);
}

let smallestNum = myNumbers.reduce(findSmallestNum);
// console.log(smallestNum)

// Q2. Create an array of strings and use the array.reduce method to find the length 
// of the longest string in the array

let myString = ["Hi", "Dog", "Yellow", "Water"];
function findLongestString(myString1, myString2) {
    return Math.max(myString1, myString2.length)
}
let longestString = myString.reduce(findLongestString, 0);
// console.log(longestString)

// Q3. Create an array of objects called bankers. Each should have a name (string) and netWorth (number). 
// Use the array.reduce method to find the total netWorth of all the bankers. 
// Then use that number to calculate the average netWorth of all the bankers.

let bankers = [
    {
        name: "Ritchie",
        netWorth: 520
    }, {
        name: "Packer",
        netWorth: 290
    }, {
        name: "Gates",
        netWorth: 810
    }
];

function totalNetWorth(acc, val) {
    return acc + val.netWorth;
}

let bankersTotal = bankers.reduce(totalNetWorth, 0);
console.log(bankersTotal);
console.log(bankersTotal / bankers.length)
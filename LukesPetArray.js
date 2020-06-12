let pets = [
    {
        name: "Rex",
        age: 1,
        species: "Dog",
        id: "20ad7703-8350-47e3-95c1-6c1de12d1338",
        ownerId: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d",
    }, {
        name: "Rome",
        age: 5,
        species: "Cat",
        id: "91c02184-534f-4bcf-aba0-4103171d5e92",
        ownerId: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d",
    }, {
        name: "Lucky",
        age: 3,
        species: "Dog",
        id: "2356e9cb-e07d-4c7e-8754-3faf68477fd7",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Roach",
        age: 7,
        species: "Dog",
        id: "23ad3350-bcae-4153-b79c-4a77d9343956",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Mair",
        age: 1,
        species: "Goldfish",
        id: "76712e6e-8554-4a94-8990-a5b53a87cef5",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Hurst",
        age: 1,
        species: "Goldfish",
        id: "604bfac3-c0e4-41c1-ad4f-69081b1c2e3e",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Hurst",
        age: 1,
        species: "Goldfish",
        id: "9e5384b0-07bb-4067-8a33-6028c89fc155",
        ownerId: "460dca95-df25-4673-8593-905c673efc9e",
    }
];
 
let owners = [
    {
        firstName: "Mitchell",
        lastName: "Bradshaw",
        id: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d"
    }, {
        firstName: "Sofija",
        lastName: "Byrd",
        id: "913ad967-3199-4f53-a228-79f0615b37af"
    }, {
        firstName: "Erika",
        lastName: "Mcgill",
        id: "460dca95-df25-4673-8593-905c673efc9e"
    }
];

// Q1 - Write a function that returns a pet given its id
// function getPet(id) {
//     function getPetById(pet) {
//         return pet.id == id;
//     }
//     return pets.find(getPetById)
// }
// let myPetfound = getPet();
// console.log(myPetfound)

// Q2 - Write a function that returns an owner given its id
// function getOwner(ownerId) {
//     function getOwnerById(owner) {
//         return owner.ownerId == ownerId;
//     }
//     return owners.find(getOwnerById);
// }
// let myOwnerFound = getOwner();
// console.log(myOwnerFound)

// Q3 - Write a function that returns the all the pets for an owner

function petsOfOwner(id) {
    function findOwnerId(owner) {
        return owner.ownerId == id;
    }
    return pets.filter(findOwnerId);
}
let allPets = petsOfOwner()
console.log(allPets)
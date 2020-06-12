let pets = [
    {
        name: "Fido",
        age: 5,
        species: "dog",
        id: "038ec66f-67b9-42e5-b4b5-f59450d33e47",
        ownerId: "1f4141a3-47d0-4f5e-9859-ea26f1462f8b"
    }, {
        name: "Felix",
        age: 3,
        species: "cat",
        id: "b1b5d2a8-751c-4f97-9a5c-0fa95ce0a58f",
        ownerId: "557bbdc7-1d8b-4ee1-ab58-1f7cc7fc80aa"
    }, {
        name: "Tweety",
        age: 8,
        species: "bird",
        id: "990d4b5c-9504-4ba2-ab70-061686b4a087",
        ownerId: "1f4141a3-47d0-4f5e-9859-ea26f1462f8b"
    }, {
        name: "Goldy",
        age: 2,
        species: "fish",
        id: "1863bc90-61e9-4da2-b053-71ec44783a5e",
        ownerId: "458fadf1-6c75-4aec-99d9-21b2cb71064d"
    }
];
let owners = [
    {
        firstName: "James",
        lastName: "Bond",
        ownerId: "458fadf1-6c75-4aec-99d9-21b2cb71064d"
    }, {
        firstName: "Peter",
        lastName: "Pan",
        ownerId: "1f4141a3-47d0-4f5e-9859-ea26f1462f8b"
    }, {
        firstName: "Donnie",
        lastName: "Brasco",
        ownerId: "557bbdc7-1d8b-4ee1-ab58-1f7cc7fc80aa"
    },
];

// Q1 - Write a function that returns a pet given its id

function getPet(id) {
    function getPetById(pet) {
        return pet.id == id;
    }
    return pets.find(getPetById)
}
let myPetfound = getPet("990d4b5c-9504-4ba2-ab70-061686b4a087");
// console.log(myPetfound)

// Q2 - Write a function that returns an owner given its id

function getOwner(ownerId) {
    function getOwnerById(owner) {
        return owner.ownerId == ownerId;
    }
    return owners.find(getOwnerById);
}
let myOwnerFound = getOwner("1f4141a3-47d0-4f5e-9859-ea26f1462f8b");
// console.log(myOwnerFound)

// Q3 - Write a function that returns the all the pets for an owner

function petsOfOwner(id) {
    function findOwnerId(owner) {
        return owner.ownerId == id;
    }
    return pets.filter(findOwnerId);
}
let allPets = petsOfOwner("557bbdc7-1d8b-4ee1-ab58-1f7cc7fc80aa")
// console.log(allPets)

// Q4 - Write a function that returns the number of pets for each owner: 
// return array should be an object with property ownerId and numberOfPets

function getPetCountByOwner() {
    function getPetsForOwner(owner) {
        let result = {};
        result.ownerId = owner.ownerId;
        result.numberOfPets = petsOfOwner(owner.ownerId).length;
        return result;
    }
    return owners.map(getPetsForOwner);
}
console.log(getPetCountByOwner())


// output should have onwerId and amount of pets

// Q5 - Write a function that returns all the names of the pets in order of their owner's last name
 
function getPetsInOrderOfOwnLastName() {
    function ownersInOrder(pet1, pet2) {
        let owner1 = getOwner(pet1.ownerId);
        let owner2 = getOwner(pet2.ownerId)
        if (owner1.lastName < owner2.lastName) {
            return -1;
        } else if (owner1.lastName > owner2.lastName) {
            return 1;
        } else {
            return 0;
        }
    } return pets.sort(ownersInOrder);
}

console.log(getPetsInOrderOfOwnLastName())
// Part 1 - Spreading Out
const evens = [2, 4, 6, 8, 10];
const odds = [1, 3, 5, 7, 9];


const numbers = [...evens, ...odds];

// console.log(numbers);

// Part 2 - Merging Objects
const faveFoods = {
    pizza: 'Gusta Pizza',
    gnocchi: 'La Buchetta',
    steak: 'Trattoria Zaza'
}

const janetFoods = {
    soup: 'La Rotunde',
    brats: 'Ratskeller',
    kraut: 'Schlussel'
}

const allFoods = {...faveFoods, ...janetFoods};

// console.log(allFoods);

// Part 3 - Destructuring

const me = {
    first: 'Dylan',
    age: '26',
    homeTown: 'Minneapolis'
}

console.log('My name is: ', me.first);
console.log('My age is: ', me.age);
console.log('My hometown is: ', me.homeTown);

const {first, age, homeTown} = me;

console.log('My name is: ', first);
console.log('My age is: ', age);
console.log('My hometown is: ', homeTown);


// console.log(me);

const petName = 'Freddy';
const petBreed = 'Chihuahua';
const petAge = '4';

let { pet = {} } = me;


pet = {
    petName,
    petBreed,
    petAge
}
console.log(me.pet);

// console.log(me);




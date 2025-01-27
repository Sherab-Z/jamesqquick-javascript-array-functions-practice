const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map(character => {
    return character.name;
});
console.log(names);
//2. Get array of all heights
const heights = characters.map(character => {
    return character.height;
});
console.log(heights);
//3. Get array of objects with just name and height properties
const nameAndHeightObjs = characters.map(character => {
    return {'name': character.name, 'height': character.height};
});
console.log(nameAndHeightObjs);
//4. Get array of all first names
const firstNamesArr = characters.map(character => {
    return character.name.split(' ')[0];
});
console.log(firstNamesArr);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((totalMass, character) => totalMass + character.mass, 0);
console.log(totalMass);

//2. Get total height of all characters
const totalHeight = characters.reduce((totalHeight, character) => totalHeight + character.height, 0);
console.log(totalHeight);

//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if(acc[color]) {
        acc[color]++;
    } else {
        acc[color] = 1;
    }
    return acc;
}, {});
console.log(charactersByEyeColor);

//4. Get total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0
);
console.log(totalNameCharacters);

//***FILTER***
//1. Get characters with mass greater than 100
const massOver100 = characters.filter(character => character.mass > 100);
console.log(massOver100);
//2. Get characters with height less than 200
const heightUnder200 = characters.filter(character => character.height < 200);
console.log(heightUnder200);
//3. Get all male characters
const maleCharacters = characters.filter(character => character.gender === 'male');
console.log(maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter(character => character.gender === 'female');
console.log(femaleCharacters);

//***SORT***
//1. Sort by mass
const sortByMass = characters.sort((a, b) => a.mass - b.mass);
console.log(sortByMass);

//2. Sort by height
const sortByHeight = characters.sort((a, b) => a.height - b.height);
console.log(sortByHeight);

//3. Sort by name
const byName = characters.sort((a, b) => {
    if(a.name < b.name) return -1;
    return 1;
});
console.log(byName);

//4. Sort by gender
const byGender = characters.sort((char) => {
    if(char.gender === 'male') return 1;
    return -1;
});

//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every(character => character.eye_color === 'blue');
console.log(allBlueEyes);

//2. Does every character have mass more than 40?
const allMassOver40 = characters.every(character => character.mass > 40);
console.log(allMassOver40);

//3. Is every character shorter than 200?
const allShorterThan200 = characters.every(character => character.height < 200);
console.log(allShorterThan200);

//4. Is every character male?
const allMale = characters.every(character => character.gender === 'male');
console.log(allMale);

//***SOME***
//1. Is there at least one male character?
const anyMale = characters.some(character => character.gender === 'male');
console.log(anyMale);

//2. Is there at least one character with blue eyes?
const anyBlueEyes = characters.some(character => character.eye_color === 'blue');
console.log(anyBlueEyes);

//3. Is there at least one character taller than 210?
const anyTallerThan200 = characters.some(character => character.height > 210);
console.log(anyTallerThan200);

//4. Is there at least one character that has mass less than 50?
const anyMassUnder50 = characters.some(character => character.mass < 50);
console.log(anyMassUnder50);

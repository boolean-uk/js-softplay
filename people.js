// people.js
// 1. Import your function from names.js

const createName = require('./names.js')

// 2. Import your function from hobbies.js
const createhobbies = require('./hobbies.js')

// 3. Create a function that has no parameters
// The function should return an object with three properties: firstName, lastName, hobbies
// Inside your function, use your previous two functions to construct the object

const log = (firstNamArg, lastNameArg, HobbiesArc) => {
   const { firstName, lastName } = createName(firstnameArc, lastNameArc)
   const {  hobbies } = createHobbies ('Gaming', 'Gym', 'Cooking',)

   return {
    firstname,
    lastName,
    hobbies,
   }
}

console.log(log())
// do not change these lines
let adults = 3
let children = 4

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

// increment adult number function
function enter(person) {
  if (person === 'adult') {
    adults++
    console.log(
      `An adult has entered. Adults: ${adults}, Children: ${children}`
    )
  } else if (person === 'child') {
    children++
  }
  console.log(`A child has entered. Adults: ${adults}, Children: ${children}`)
}

// decrease leave function

function leave(person) {
  if (person === 'adult') {
    adults--
  }
  console.log(`An adult has left. Adults: ${adults}, Children: ${children}`)

  if (person === 'child') {
    children--
  }
  console.log(`A child has left. Adults: ${adults}, Children: ${children}`)
}

// number of people

function occupancy() {
  return adults + children
}
console.log(`Current Occupancy - Adults: ${adults}, Children: ${children}`)

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter,
  leave,
  occupancy
}

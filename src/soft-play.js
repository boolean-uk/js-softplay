// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

let numAdults = 0
let numChildren = 0

let counter = 0

function incrementCounter(numAdults, numChildren) {
  adults = adults + numAdults
  children = children + numChildren
  counter++
}

function decrementCounter(numAdults, numChildren) {
  adults = adults - numAdults
  children = children - numChildren
  counter--
}

function occupancy() {
  return {
    children: children,
    adults: adults,
  }
}

  function enter(numAdults, numChildren) {

    if (numAdults >= 1 && numChildren > 0) {
      incrementCounter(numAdults, numChildren)
      console.log(occupancy(adults, children))
      return true
    } else {
      return false
    }

  }
  console.log(enter(4, 2))


  function leave(numAdults, numChildren) {

    if (numAdults >= 1 && numChildren <= 1) {

      decrementCounter(numAdults, numChildren);
       //console.log(occupancy(adults, children))
       console.log(`Number of adults: ${adults}, Number of children: ${children}`);
      return true
    } else {
      return false
    }
  }

  console.log(leave(2, 1))


  // TODO: Change the undefined values below to the name of your functions
  module.exports = {
    enter: undefined,
    leave: undefined,
    occupancy: undefined
  }

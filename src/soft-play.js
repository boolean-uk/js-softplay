// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.
function occupancy() {
  return {
    adults: adults,
    children: children
  }
}
// console.log(occupancy())

function enter(numAdults, numChildren) {
  if (numChildren <= numAdults) {
    adults += numAdults
    children += numChildren
    return true
  } else {
    return false
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: undefined,
  occupancy: occupancy
}

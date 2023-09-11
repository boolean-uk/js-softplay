// do not change these lines
let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
// Start with the occupancy function.

function enter(numAdults, numChildren) {
  let validInput = false
  if (numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    validInput = true
  }
  return validInput
}

function leave(numAdults, numChildren) {
  let validInput = false
  const checkAdults = adults - numAdults
  const checkChildren = children - numChildren
  if (
    numAdults <= occupancy().adults && // Case 4
    numChildren <= occupancy().children && // Case 4
    numAdults >= numChildren && // Case 1, Case 3
    checkAdults >= checkChildren // Case 2
  ) {
    adults -= numAdults
    children -= numChildren
    validInput = true
  }
  return validInput
}

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy
}
